import { CountryCode, countryNameRecord } from '@lib/countries'
import { getCountryFlagEmoji } from '@lib/countries/getCountryFlagEmoji'

interface CountryFlagEmojiProps {
  code?: CountryCode
}

export const CountryFlagEmoji = ({ code }: CountryFlagEmojiProps) => {
  const title = code ? countryNameRecord[code] || code : undefined
  return (
    <span role="img" aria-labelledby={title} title={title}>
      {code ? getCountryFlagEmoji(code) : '🏳'}
    </span>
  )
}
