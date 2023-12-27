import { formatCode } from './formatCode'
import { createFile } from './createFile'

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
