import { InputProps } from '../props'
import { FixedOptionsInput } from '../inputs/FixedOptionsInput'
import styled from 'styled-components'
import { OptionContent } from '../inputs/FixedOptionsInput/OptionContent'
import { Asset } from '@reactkit/entities/Asset'
import { round } from '../css/round'
import { sameDimensions } from '../css/sameDimensions'
import { getColor } from '../theme/getters'
import { VStack } from '../layout/Stack'
import { Text } from '../text'
import { AssetIcon } from './AssetIcon'

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
        <OptionContent
          identifier={<AssetIcon name={name} src={icon} />}
          name={
            <VStack>
              <Text size={14} weight="semibold">
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
