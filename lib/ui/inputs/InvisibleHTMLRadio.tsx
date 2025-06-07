import { InvisibleInput } from './InvisibleInput'

export interface InvisibleHTMLRadioProps {
  groupName: string
  value: string | number | null
  isSelected: boolean
  onSelect: () => void
  autoFocus?: boolean
}

export const InvisibleHTMLRadio = ({
  groupName,
  value,
  isSelected,
  onSelect,
}: InvisibleHTMLRadioProps) => (
  <InvisibleInput
    type="radio"
    name={groupName}
    checked={isSelected}
    value={value === null ? '' : value}
    onChange={(event) => {
      const inputValue = event.currentTarget.value
      const normalizedValue = inputValue === '' ? null : inputValue

      if (
        normalizedValue === value ||
        (value !== null && normalizedValue === value.toString())
      ) {
        onSelect()
      }
    }}
  />
)
