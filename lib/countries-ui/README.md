# @lib/countries-ui

This package provides React UI components for displaying country flags and handling country selection. It builds on top of `@lib/countries` which provides the underlying country data and types.

## Components

### CountryInput

A searchable dropdown input for selecting countries:

```tsx
import { CountryInput } from '@lib/countries-ui'
import { CountryCode } from '@lib/countries'

function MyForm() {
  const [country, setCountry] = useState<CountryCode | null>(null)

  return (
    <CountryInput 
      value={country}
      onChange={setCountry}
      label="Select a country"
    />
  )
}
```

### CountryFlag

A component for displaying a country's flag using SVG:

```tsx
import { CountryFlag } from '@lib/countries-ui'

function CountryDisplay() {
  return <CountryFlag code="US" />
}
```

### CountryFlagEmoji

A component for displaying a country's flag as an emoji:

```tsx
import { CountryFlagEmoji } from '@lib/countries-ui'

function CountryDisplay() {
  return <CountryFlagEmoji code="US" />
}
```

### CountryFlagFallback

A fallback component that displays the country code when a flag image is not available:

```tsx
import { CountryFlagFallback } from '@lib/countries-ui'

function CountryDisplay() {
  return <CountryFlagFallback code="US" />
}
```

## Features

- SVG flags for all countries
- Searchable country selection dropdown
- Emoji flag fallbacks
- Accessible flag components with proper ARIA labels
- Responsive flag sizing

## Dependencies

This package depends on:
- `@lib/countries` for country data and types
- `@lib/ui` for base UI components

## Usage with TypeScript

The package exports TypeScript types for country codes:

```tsx
import { CountryCode } from '@lib/countries-ui'

const myCountry: CountryCode = 'US'
```
