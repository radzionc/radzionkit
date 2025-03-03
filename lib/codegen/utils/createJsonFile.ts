import { createFile } from './createFile'
import { formatCode } from './formatCode'

interface CreateJsonFileParams {
  directory: string
  fileName: string
  content: string
}

export const createJsonFile = async ({
  directory,
  fileName,
  content,
}: CreateJsonFileParams) => {
  const extension = 'json'

  const code = await formatCode({
    extension,
    content,
  })

  createFile({
    directory,
    fileName,
    content: code,
    extension,
  })
}
