import { CSSProperties } from 'react'
import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../../props'
import { Line } from '../Line'
import { Text } from '../Text'

interface Props extends ComponentWithChildrenProps {
  columnNames: string[]
  gridTemplateColumns: CSSProperties['gridTemplateColumns']
}

const Container = styled.div`
  display: grid;
  gap: 16px 48px;
  align-items: center;
`

const Separator = styled(Line)`
  grid-column: 1/-1;
`

export const TableLayout = ({
  children,
  columnNames,
  gridTemplateColumns,
}: Props) => {
  return (
    <Container style={{ gridTemplateColumns }}>
      {columnNames.map((name) => (
        <Text weight="regular" color="shy" key={name}>
          {name}
        </Text>
      ))}
      <Separator />
      {children}
    </Container>
  )
}
