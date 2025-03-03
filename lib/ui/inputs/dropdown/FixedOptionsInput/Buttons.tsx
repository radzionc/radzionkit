import { HStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { CollapseToggleButton } from '../../../buttons/CollapseToggleButton'
import { IconButton } from '../../../buttons/IconButton'
import { textInputHorizontalPadding } from '../../../css/textInput'
import { toSizeUnit } from '../../../css/toSizeUnit'
import { CloseIcon } from '../../../icons/CloseIcon'
import { dropdownInputConfig } from '../config'

const Container = styled(HStack)`
  position: absolute;
  gap: 4px;
  right: ${toSizeUnit(textInputHorizontalPadding)};
`

interface FixedOptionsInputButtonsProps {
  onClear?: () => void
  areOptionsVisible: boolean
  toggleOptionsVisibility: () => void
}

export const FixedOptionsInputButtons = ({
  onClear,
  areOptionsVisible,
  toggleOptionsVisibility,
}: FixedOptionsInputButtonsProps) => (
  <Container>
    {onClear && (
      <IconButton
        size={dropdownInputConfig.iconButtonSize}
        icon={<CloseIcon />}
        title="Clear"
        kind="secondary"
        onClick={onClear}
      />
    )}
    <CollapseToggleButton
      size={dropdownInputConfig.iconButtonSize}
      kind="secondary"
      isOpen={areOptionsVisible}
      onMouseDown={toggleOptionsVisibility}
      onTouchStart={toggleOptionsVisibility}
    />
  </Container>
)
