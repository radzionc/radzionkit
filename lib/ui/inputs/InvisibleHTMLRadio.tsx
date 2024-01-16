import { InvisibleInput } from './InvisibleInput'

export interface InvisibleHTMLRadioProps {
  groupName: string
  value: string | number
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
    value={value}
    onChange={(event) => {
      if (event.currentTarget.value === value.toString()) {
        onSelect()
      }
    }}
  />
)
