import { shouldBePresent } from '../assert/shouldBePresent'

export const readFileAsArrayBuffer = (file: File) =>
  new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = shouldBePresent(reader.result, 'FileReader result')

      if (typeof result === 'string') {
        throw new Error('FileReader result expected to be an ArrayBuffer')
      }

      resolve(result)
    }

    reader.onerror = () => reject(reader.error)

    reader.readAsArrayBuffer(file)
  })
