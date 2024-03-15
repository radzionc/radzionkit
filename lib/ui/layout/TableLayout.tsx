import { CSSProperties } from 'react'
import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../props'
import { Text } from '../text'
import { LineSeparator } from './LineSeparator'

interface Props extends ComponentWithChildrenProps {
  columnNames: string[]
  gridTemplateColumns: CSSProperties['gridTemplateColumns']
}

const Container = styled.div`
  display: grid;
  gap: 16px 48px;
  align-items: center;
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
      <LineSeparator layout="column" />
      {children}
    </Container>
  )
}
