import { ValueProp } from '@lib/ui/props'
import { CSSProperties, Fragment } from 'react'

import { Text } from '.'

function parseString(input: string): (string | number)[] {
  const regex = /(\d+|\D+)/g
  const matches = input.match(regex)
  if (!matches) {
    return []
  }
  return matches.map((match) => {
    return isNaN(parseInt(match)) ? match : parseInt(match)
  })
}

export const EmphasizeNumbers = ({ value }: ValueProp<string>) => {
  const parts = parseString(value)

  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === 'number') {
          return <Fragment key={index}>{part}</Fragment>
        }

        const style: CSSProperties = {
          fontSize: '0.8em',
          marginLeft: '0.1em',
        }

        if (index !== parts.length - 1) {
          style.marginRight = '0.4em'
        }

        return (
          <Text style={style} as="span" key={index}>
            {part}
          </Text>
        )
      })}
    </>
  )
}
