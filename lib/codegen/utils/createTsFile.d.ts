interface CreateTsFileParams {
  extension?: 'ts' | 'tsx'
  directory: string
  fileName: string
  generatedBy?: string
  content: string
}
export declare const createTsFile: ({
  extension,
  directory,
  fileName,
  generatedBy,
  content,
}: CreateTsFileParams) => Promise<void>
export {}
