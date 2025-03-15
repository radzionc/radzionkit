import * as cheerio from 'cheerio'
import puppeteer, { Browser } from 'puppeteer'

/**
 * Represents a book with its price per page information
 */
interface BookInfo {
  name: string
  price: number
  numberOfPages: number
  pricePerPage: number
  url: string
}

/**
 * Fetches and extracts product information from a Wildberries product page
 * and calculates the price per page
 * @param url The URL of the Wildberries product page
 * @param browser The browser instance to use
 * @returns BookInfo object or null if scraping failed
 */
async function scrapeWildberriesProduct(
  url: string,
  browser: Browser,
): Promise<BookInfo | null> {
  let page = null

  try {
    console.log(`Scraping product: ${url}`)

    // Open a new page
    page = await browser.newPage()

    // Set viewport size
    await page.setViewport({ width: 1280, height: 800 })

    // Set user agent to mimic a real browser
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    )

    // Navigate to the URL
    await page.goto(url, { waitUntil: 'networkidle2' })

    // Wait for product information to load with a shorter timeout
    // Use waitForSelector with optional flag to continue even if not found
    const headerExists = await page
      .waitForSelector('.product-page__header h1', { timeout: 5000 })
      .then(() => true)
      .catch(() => false)

    if (!headerExists) {
      console.log(`Product header not found for ${url}, skipping this product`)
      return null
    }

    // Get the fully rendered HTML content
    const html = await page.content()

    // Load the HTML into cheerio for easier parsing
    const $ = cheerio.load(html)

    // Extract product information
    const productName = $('.product-page__header h1').text().trim()
    if (!productName) {
      console.log(
        `Could not extract product name for ${url}, skipping this product`,
      )
      return null
    }

    // Fix price extraction - take only the first price value
    const priceText = $('.price-block__final-price').first().text().trim()
    // Extract numeric price value (remove currency symbol and convert to number)
    const priceMatch = priceText.match(/[\d\s,.]+/)
    const price = priceMatch
      ? parseFloat(priceMatch[0].replace(/\s+/g, '').replace(',', '.'))
      : 0

    if (price === 0) {
      console.log(
        `Could not extract valid price for ${url}, skipping this product`,
      )
      return null
    }

    // Extract product specifications
    const specifications: Record<string, string> = {}
    $('.product-params__cell').each((_, element) => {
      const name = $(element).find('.product-params__cell-title').text().trim()
      const value = $(element).find('.product-params__cell-text').text().trim()
      if (name && value) {
        specifications[name] = value
      }

      // Also check for direct span content for page numbers
      const spanText = $(element).find('span').text().trim()
      if (spanText && spanText.includes('страниц')) {
        specifications['Количество страниц'] = spanText
      }
    })

    // Look for number of pages in specifications
    let numberOfPages = 0
    const pageKeywords = [
      'Количество страниц',
      'Страниц',
      'страниц',
      'Pages',
      'pages',
    ]

    // First try to find it in specifications
    for (const key in specifications) {
      if (pageKeywords.some((keyword) => key.includes(keyword))) {
        const pagesMatch = specifications[key].match(/\d+/)
        if (pagesMatch) {
          numberOfPages = parseInt(pagesMatch[0], 10)
          break
        }
      }
    }

    // If not found in specifications, search directly in the HTML
    if (numberOfPages === 0) {
      // Look for any element containing text with page numbers
      $('*').each((_, element) => {
        const text = $(element).text().trim()
        if (text.includes('страниц')) {
          const pagesMatch = text.match(/(\d+)\s*страниц/)
          if (pagesMatch && pagesMatch[1]) {
            numberOfPages = parseInt(pagesMatch[1], 10)
            return false // break the each loop
          }
        }
      })
    }

    // If still no page count found, log and skip
    if (numberOfPages === 0) {
      console.log(`Could not find page count for ${url}, skipping this product`)
      return null
    }

    // Calculate price per page
    let pricePerPage = 0
    if (numberOfPages > 0 && price > 0) {
      pricePerPage = price / numberOfPages
    }

    // Return the book information
    return {
      name: productName,
      price,
      numberOfPages,
      pricePerPage,
      url,
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error scraping the page ${url}: ${error.message}`)
    } else {
      console.error(`Unexpected error for ${url}: ${String(error)}`)
    }
    return null
  } finally {
    // Close the page but not the browser
    if (page) {
      await page.close()
    }
  }
}

/**
 * Main function to scrape books from search page and calculate price per page
 */
async function findCheapestBooksPerPage(searchUrl: string): Promise<void> {
  let browser: Browser | null = null

  try {
    // Launch a single browser instance for all operations
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    // Get all book links from the search page
    const bookLinks = await scrapeSearchPage(searchUrl, browser)

    if (bookLinks.length === 0) {
      console.error('No book links found on the search page')
      return
    }

    console.log(`Starting to process ${bookLinks.length} books...`)

    // Process books in batches to avoid overwhelming the system
    const batchSize = 5
    const booksInfo: (BookInfo | null)[] = []

    for (let i = 0; i < bookLinks.length; i += batchSize) {
      const batch = bookLinks.slice(i, i + batchSize)
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(bookLinks.length / batchSize)}`,
      )

      const batchResults = await Promise.all(
        batch.map((url) => scrapeWildberriesProduct(url, browser as Browser)),
      )

      booksInfo.push(...batchResults)
    }

    // Filter out null results (failed scrapes)
    const validBooks = booksInfo.filter(
      (book): book is BookInfo => book !== null,
    )

    // Filter out books with no pages or invalid price per page
    const booksWithValidPricePerPage = validBooks.filter(
      (book) => book.numberOfPages > 0 && book.pricePerPage > 0,
    )

    if (booksWithValidPricePerPage.length === 0) {
      console.log('No books with valid price per page information found')
      return
    }

    // Sort books by price per page (cheapest first)
    const sortedBooks = booksWithValidPricePerPage.sort(
      (a, b) => a.pricePerPage - b.pricePerPage,
    )

    // Print the results
    console.log('\nBooks sorted by price per page (cheapest first):')
    sortedBooks.forEach((book, index) => {
      console.log(`\n${index + 1}. ${book.name}`)
      console.log(`   Price: ${book.price.toFixed(2)} ₽`)
      console.log(`   Pages: ${book.numberOfPages}`)
      console.log(`   Price per page: ${book.pricePerPage.toFixed(2)} ₽`)
      console.log(`   URL: ${book.url}`)
    })

    console.log(`\nTotal books processed: ${validBooks.length}`)
    console.log(
      `Books with valid price per page: ${booksWithValidPricePerPage.length}`,
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error in main process: ${error.message}`)
    } else {
      console.error(`Unexpected error in main process: ${String(error)}`)
    }
  } finally {
    // Close the browser
    if (browser) {
      await browser.close()
      console.log('Browser closed')
    }
  }
}

/**
 * Scrapes a search results page to get all book links
 * @param searchUrl The URL of the search results page
 * @param browser The browser instance to use
 * @returns Array of book URLs
 */
async function scrapeSearchPage(
  searchUrl: string,
  browser: Browser,
): Promise<string[]> {
  let page = null
  try {
    console.log(`Scraping search page: ${searchUrl}`)

    page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    )

    await page.goto(searchUrl, { waitUntil: 'networkidle2' })

    // Wait for product cards to load
    await page.waitForSelector('.product-card__link', { timeout: 15000 })

    // Scroll down to trigger lazy loading until no more new products appear
    console.log('Starting to scroll to load all products...')

    let previousHeight = 0
    let currentHeight = await page.evaluate(() => document.body.scrollHeight)
    let productCount = 0
    let scrollAttempts = 0
    const maxScrollAttempts = 30 // Limit scrolling attempts to prevent infinite loops

    while (
      previousHeight !== currentHeight &&
      scrollAttempts < maxScrollAttempts
    ) {
      // Get current product count
      productCount = await page.evaluate(() => {
        return document.querySelectorAll('.product-card__link').length
      })

      console.log(
        `Current product count: ${productCount}, scroll attempt: ${scrollAttempts + 1}`,
      )

      // Scroll to the bottom of the page
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

      // Wait for potential new content to load
      await page
        .waitForFunction(`document.body.scrollHeight > ${currentHeight}`, {
          timeout: 5000,
        })
        .catch(() => {
          // If timeout occurs, it might mean no new content was loaded
          console.log('No new content loaded after scrolling')
        })

      // Update heights
      previousHeight = currentHeight
      currentHeight = await page.evaluate(() => document.body.scrollHeight)

      scrollAttempts++
    }

    console.log(`Finished scrolling. Total scroll attempts: ${scrollAttempts}`)
    console.log(`Final page height: ${currentHeight}px`)

    // Get the fully rendered HTML content after scrolling
    const html = await page.content()

    // Load the HTML into cheerio for easier parsing
    const $ = cheerio.load(html)

    // Extract all book links
    const bookLinks: string[] = []
    $('.product-card__link').each((_, element) => {
      const href = $(element).attr('href')
      if (href) {
        bookLinks.push(href)
      }
    })

    console.log(`Found ${bookLinks.length} book links on the search page`)
    return bookLinks
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error scraping search page: ${error.message}`)
    } else {
      console.error(`Unexpected error scraping search page: ${String(error)}`)
    }
    return []
  } finally {
    // Close the page but not the browser
    if (page) {
      await page.close()
    }
  }
}

// URL of the Wildberries search page to scrape
const searchUrl =
  'https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=popular&search=marvel+%D0%BA%D0%BE%D0%BC%D0%B8%D0%BA%D1%81&priceU=4000%3B10000&foriginal=1'

// Execute the main function
findCheapestBooksPerPage(searchUrl)
  .then(() => console.log('Process completed'))
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error('Process failed:', error.message)
    } else {
      console.error('Process failed:', String(error))
    }
  })
