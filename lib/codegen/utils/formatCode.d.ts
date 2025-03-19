interface FormatCodeParams {
  extension: 'ts' | 'tsx' | 'json'
  content: string
}
export declare const formatCode: ({
  extension,
  content,
}: FormatCodeParams) => Promise<string>
export {}
