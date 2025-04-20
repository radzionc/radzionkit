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

  const words = await extractWordsFromEpub(inputSrc)
  const ignoreWords = await fs.promises.readFile(ignoreWordsSrc, 'utf-8')
  const ignoreWordsSet = new Set(ignoreWords.split('\n'))

  ignoreWordsSet.forEach((word) => {
    words.delete(word)
  })

  words.forEach((word) => {
    if (!spell.correct(word)) {
      words.delete(word)
    }
  })

  fs.promises.writeFile(outputSrc, Array.from(words).join('\n'), 'utf-8')
}

main()
