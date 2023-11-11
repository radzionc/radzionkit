import styled from 'styled-components'
import { HStack } from '../../layout/Stack'
import { toSizeUnit } from '../../css/toSizeUnit'
import { buttonSize, buttonsSpacing } from './config'
import { textInputPadding } from '../../css/textInput'
import { IconButton } from '../../buttons/IconButton'
import { CloseIcon } from '../../icons/CloseIcon'
import { preventDefault } from '../../utils/preventDefault'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'

const Container = styled(HStack)`
  align-items: center;
  gap: ${toSizeUnit(buttonsSpacing)};
  position: absolute;
  right: ${toSizeUnit(textInputPadding)};
`

interface InputButtonsProps {
  hasValue: boolean
  onClean: () => void
  areOptionsVisible: boolean
  toggleOptionsVisibility: () => void
}

export const InputButtons = ({
  hasValue,
  onClean,
  areOptionsVisible,
  toggleOptionsVisibility,
}: InputButtonsProps) => (
  <Container>
    {hasValue && (
      <IconButton
        size={buttonSize}
        icon={<CloseIcon />}
        title="Clear"
        as="div"
        kind="secondary"
        onClick={preventDefault(onClean)}
      />
    )}
    <CollapseToggleButton
      size={buttonSize}
      as="div"
      kind="secondary"
      isOpen={areOptionsVisible}
      onClick={preventDefault(toggleOptionsVisibility)}
    />
  </Container>
)
