import { useTheme } from 'styled-components'

export const IncreaserIcon = () => {
  const { colors } = useTheme()

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 400C310.457 400 400 310.457 400 200C400 89.5431 310.457 0 200 0C89.5431 0 0 89.5431 0 200C0 310.457 89.5431 400 200 400Z"
        fill="currentColor"
      />
      <path
        d="M313.411 313.411C343.417 283.405 360.274 242.709 360.274 200.274C360.274 157.84 343.417 117.143 313.412 87.137C283.406 57.1313 242.709 40.2742 200.274 40.2742C157.84 40.2742 117.143 57.1313 87.1372 87.137L200.274 200.274L313.411 313.411Z"
        fill={colors.background.toCssValue()}
      />
    </svg>
  )
}
