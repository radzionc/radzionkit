import fs from 'fs'
import path from 'path'

import nspell from 'nspell'

import { extractWordsFromEpub } from './core/extractWordsFromEpub'

const inputSrc = path.join(__dirname, 'input.epub')
const outputSrc = path.join(__dirname, 'output.txt')
const ignoreWordsSrc = path.join(__dirname, 'ignore_words.txt')

const main = async () => {
  const en = await import('dictionary-en')

  const spell = nspell(en.default as any)

  const allWords = await extractWordsFromEpub(inputSrc)
  const ignoreWords = await fs.promises.readFile(ignoreWordsSrc, 'utf-8')
  const ignoreWordsSet = new Set(ignoreWords.split('\n'))

  const result = new Set<string>()

  allWords.forEach((word) => {
    if (!spell.correct(word) || ignoreWordsSet.has(word)) {
      return
    }

    result.add(word)
  })

  fs.promises.writeFile(outputSrc, Array.from(result).join('\n'), 'utf-8')
}

main()
