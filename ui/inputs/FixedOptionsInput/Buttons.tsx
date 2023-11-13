import styled from 'styled-components'
import { HStack } from '../../layout/Stack'
import { toSizeUnit } from '../../css/toSizeUnit'
import { textInputPadding } from '../../css/textInput'
import { IconButton } from '../../buttons/IconButton'
import { fixedOptionsInputConfig } from './config'
import { CloseIcon } from '../../icons/CloseIcon'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'

const Container = styled(HStack)`
  position: absolute;
  gap: 4px;
  right: ${toSizeUnit(textInputPadding)};
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
        size={fixedOptionsInputConfig.iconButtonSize}
        icon={<CloseIcon />}
        title="Clear"
        kind="secondary"
        onClick={onClear}
      />
    )}
    <CollapseToggleButton
      size={fixedOptionsInputConfig.iconButtonSize}
      kind="secondary"
      isOpen={areOptionsVisible}
      onMouseDown={toggleOptionsVisibility}
      onTouchStart={toggleOptionsVisibility}
    />
  </Container>
)
