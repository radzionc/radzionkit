import styled, { css, useTheme } from 'styled-components'

import { HStack } from '../../layout/Stack'
import { Text } from '../../text'
import { getColor } from '../theme/getters'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'
import { interactive } from '../../css/interactive'
import { toSizeUnit } from '../../css/toSizeUnit'
import { CheckIcon } from '../../icons/CheckIcon'
import { CloseIcon } from '../../icons/CloseIcon'

type SwitchKind = 'regular' | 'primary'

interface SwitchProps {
  value: boolean
  kind?: SwitchKind
  onChange: (value: boolean) => void
  label?: string
  className?: string
}

const height = 28
const width = height * 1.58
const spacing = 2
const controlSize = height - spacing * 2

const Control = styled.div`
  ${sameDimensions(controlSize)};

  ${round};
  ${transition};

  ${centerContent};
  color: ${getColor('background')};
  background: ${getColor('text')};
  font-size: 14px;
`

const Wrapper = styled(HStack)<{ kind: SwitchKind }>`
  ${interactive};

  ${({ kind }) =>
    kind === 'primary' &&
    css`
      padding: 2px;
      padding-right: 10px;
      background: ${getColor('background')};
      border: 1px solid ${getColor('mist')};
      ${round};
    `}

  color: ${getColor('textSupporting')};
  ${transition};

  :hover {
    color: ${getColor('text')};
  }

  :hover ${Control} {
    transform: scale(1.08);
  }
`

const Container = styled.div`
  width: ${toSizeUnit(width)};
  height: ${toSizeUnit(height)};

  display: flex;
  align-items: center;

  ${round};

  ${transition};
`

export const Switch = ({
  value,
  onChange,
  label,
  kind = 'regular',
  className,
}: SwitchProps) => {
  const { colors } = useTheme()
  return (
    <Wrapper
      onClick={() => onChange(!value)}
      as="label"
      alignItems="center"
      gap={8}
      id={label}
      kind={kind}
      className={className}
    >
      <Container
        style={{
          background: (value ? colors.mistExtra : colors.mist).toCssValue(),
        }}
      >
        <Control
          style={{
            marginLeft: value ? width - controlSize - spacing : spacing,
          }}
        >
          {value ? <CheckIcon /> : <CloseIcon />}
        </Control>
      </Container>
      {label && (
        <Text size={16} weight="semibold">
          {label}
        </Text>
      )}
    </Wrapper>
  )
}
