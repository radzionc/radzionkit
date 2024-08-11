import { InputProps } from '@lib/ui/props'
import styled from 'styled-components'
import { Asset } from './Asset'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { getColor } from '@lib/ui/theme/getters'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { AssetIcon } from './AssetIcon'
import { FixedOptionsInput } from '@lib/ui/inputs/dropdown/FixedOptionsInput'
import { DropdownOptionContent } from '@lib/ui/inputs/dropdown/DropdownOptionContent'

interface AssetInputProps extends InputProps<Asset | null> {
  label?: React.ReactNode
  options: Asset[]
}

const IdentifierPlaceholder = styled.div`
  ${round};
  ${sameDimensions('1em')};
  background: ${getColor('mist')};
`

export const AssetInput = ({
  value,
  onChange,
  label,
  options,
}: AssetInputProps) => {
  return (
    <FixedOptionsInput
      value={value}
      label={label}
      onChange={onChange}
      placeholder="Search for an asset"
      options={options}
      getOptionSearchStrings={(option) => [option.name, option.id]}
      getOptionName={(option) => option.name}
      getOptionKey={(option) => option.id}
      renderOptionIdentifier={({ name, icon }) => (
        <AssetIcon name={name} src={icon} />
      )}
      optionIdentifierPlaceholder={<IdentifierPlaceholder />}
      renderOption={({ name, id, icon }) => (
        <DropdownOptionContent
          identifier={<AssetIcon name={name} src={icon} />}
          name={
            <VStack>
              <Text size={14} weight="500">
                {name}
              </Text>
              <Text size={14} color="shy">
                {id}
              </Text>
            </VStack>
          }
        />
      )}
    />
  )
}
