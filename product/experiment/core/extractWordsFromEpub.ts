import EPub from 'epub'

export const extractWordsFromEpub = async (
  filePath: string,
): Promise<Set<string>> => {
  return new Promise((resolve, reject) => {
    const epub = new EPub(filePath)
    const wordSet = new Set<string>()

    epub.on('end', () => {
      const chapters = [...epub.flow]

      const processChapter = (chapterIndex: number) => {
        // Base case: all chapters processed
        if (chapterIndex >= chapters.length) {
          resolve(wordSet)
          return
        }

        // Process current chapter
        const chapter = chapters[chapterIndex]
        epub.getChapter(chapter.id, (error: Error | null, text: string) => {
          if (error) {
            reject(error)
            return
          }

          // Extract words from text
          const strippedText = text.replace(/<[^>]*>/g, ' ') // Strip HTML tags

          // Process the clean text
          const words = strippedText
            .toLowerCase()
            .replace(/[^\w\s-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .filter((word) => word.length > 0)
            .filter((word) => !/\d/.test(word))

          words.forEach((word) => wordSet.add(word))

          processChapter(chapterIndex + 1)
        })
      }

      // Start processing from the first chapter
      processChapter(0)
    })

    epub.on('error', (error: Error) => {
      reject(error)
    })

    // Start parsing the epub
    epub.parse()
  })
}
