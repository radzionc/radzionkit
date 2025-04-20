import fs from 'fs'
import path from 'path'

import { attempt } from '@lib/utils/attempt'
import EPub from 'epub'

type WordCount = Record<string, number>

const countWords = (text: string): WordCount => {
  // First, strip HTML tags
  const strippedText = text.replace(/<[^>]*>/g, ' ')

  // Then process the clean text
  const words = strippedText
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ') // Replace punctuation with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
    .split(' ')
    .filter((word) => word.length > 3) // Filter out words with 3 or fewer characters
    .filter((word) => !/\d/.test(word)) // Filter out words containing numbers
    .filter((word) => !word.startsWith('class')) // Filter out words starting with 'class'
    .filter(
      (word) =>
        ![
          'span',
          'div',
          'p',
          'br',
          'td',
          'tr',
          'li',
          'ul',
          'ol',
          'href',
        ].includes(word),
    ) // Filter common HTML elements

  return words.reduce((acc: WordCount, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})
}

const mergeWordCounts = (counts: WordCount[]): WordCount => {
  return counts.reduce((acc, count) => {
    Object.entries(count).forEach(([word, frequency]) => {
      acc[word] = (acc[word] || 0) + frequency
    })
    return acc
  }, {})
}

const analyzeEpub = async (filePath: string): Promise<WordCount> => {
  const result = await attempt<WordCount, Error>(async () => {
    return new Promise((resolve, reject) => {
      const epub = new EPub(filePath)
      const wordCounts: WordCount[] = []

      epub.on('end', () => {
        epub.flow.forEach((chapter) => {
          epub.getChapter(chapter.id, (error: Error | null, text: string) => {
            if (error) {
              reject(error)
              return
            }
            wordCounts.push(countWords(text))
          })
        })

        // Give some time for all chapters to be processed
        setTimeout(() => {
          const mergedCounts = mergeWordCounts(wordCounts)
          resolve(mergedCounts)
        }, 1000)
      })

      epub.parse()
    })
  })

  if ('error' in result) {
    console.error('Error processing EPUB:', result.error)
    return {}
  }

  return result.data
}

const saveWordFrequencies = async (
  wordCount: WordCount,
  outputPath: string,
): Promise<void> => {
  const sortedWords = Object.entries(wordCount).sort(([, a], [, b]) => b - a)

  const content = ['Word Frequencies:', '================']
  sortedWords.forEach(([word, count]) => {
    content.push(`${word}: ${count}`)
  })

  const result = await attempt(async () => {
    await fs.promises.writeFile(outputPath, content.join('\n'), 'utf-8')
  })

  if ('error' in result) {
    console.error('Error saving report:', result.error)
    process.exit(1)
  }
}

// Example usage
const main = async () => {
  const wordCount = await analyzeEpub(path.join(__dirname, 'book.epub'))

  const reportPath = path.join(__dirname, 'report.txt')
  await saveWordFrequencies(wordCount, reportPath)
  console.log('Report saved to:', reportPath)
}

main().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
