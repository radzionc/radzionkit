interface CreateFileParams {
  directory: string
  fileName: string
  content: string
  extension: string
}
export declare const createFile: ({
  directory,
  fileName,
  content,
  extension,
}: CreateFileParams) => void
export {}
