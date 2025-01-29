import { ValueProp } from '../props'
import { RectangleCorner } from '@lib/ui/entities/RectangleCorner'

export const RectangleCornerIcon = ({ value }: ValueProp<RectangleCorner>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      fill={value === 'top-left' ? 'currentColor' : 'none'}
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      fill={value === 'top-right' ? 'currentColor' : 'none'}
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      fill={value === 'bottom-right' ? 'currentColor' : 'none'}
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      fill={value === 'bottom-left' ? 'currentColor' : 'none'}
    />
  </svg>
)
