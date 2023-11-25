import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { useLanguage } from './LanguageProvider'

export const Link = ({ href, ...props }: ComponentProps<typeof NextLink>) => {
  const [language] = useLanguage()

  const path = `/${language}${href}`

  return <NextLink {...props} href={path} />
}
