import { useTheme } from 'styled-components'

export const Icon = () => {
  const { colors } = useTheme()

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill={colors.contrast.toCssValue()} />
      <path
        d="M85.2631 32.8319C85.2631 41.9535 69.4753 81.0526 50 81.0526C30.5247 81.0526 14.7368 41.9535 14.7368 32.8319C14.7368 23.7103 30.5247 20 50 20C69.4753 20 85.2631 23.7103 85.2631 32.8319Z"
        fill={colors.background.toCssValue()}
      />
    </svg>
  )
}
