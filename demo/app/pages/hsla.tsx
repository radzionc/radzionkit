import { DemoPage } from '@demo/app/components/DemoPage'
import { VStack } from '@lib/ui/layout/Stack'
import { HSLAParameter, hslaKeys, hslaParamMaxValue } from '@lib/ui/colors/HSLA'
import { ColorParameterInput } from '@demo/app/components/ColorParameterInput'
import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import { Text } from '@lib/ui/text'
import { Panel } from '@lib/ui/css/panel'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'
import { CopyText } from '@lib/ui/text/CopyText'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'

const colorParameterName: Record<HSLAParameter, string> = {
  h: 'Hue',
  s: 'Saturation',
  l: 'Lightness',
  a: 'Alpha',
}

const formatColorParameter: Record<HSLAParameter, (value: number) => string> = {
  h: (value) => `${value}°`,
  s: (value) => `${value}%`,
  l: (value) => `${value}%`,
  a: (value) => value.toFixed(2),
}

const colorParameterStep: Record<HSLAParameter, number> = {
  h: 1,
  s: 1,
  l: 1,
  a: 0.01,
}

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100px 1fr 80px;

  > * {
    &:last-child {
      justify-self: end;
    }
  }
`

const Preview = styled(Panel)`
  aspect-ratio: 1 / 1;
  display: flex;
`

export default makeDemoPage(() => {
  const { colors } = useTheme()
  const [value, setValue] = useState(colors.primary)

  return (
    <DemoPage title="HSLA" youtubeVideoId="f3_TYR-8Sd8">
      <UniformColumnGrid minChildrenWidth={320} fullWidth gap={40}>
        <SeparatedByLine gap={40}>
          <VStack gap={20}>
            {hslaKeys.map((key) => (
              <InputContainer key={key}>
                <Text>{colorParameterName[key]}</Text>
                <ColorParameterInput
                  onChange={(parameter) => {
                    setValue(
                      value.getVariant({ [key]: () => parameter.toFixed(2) }),
                    )
                  }}
                  value={value[key]}
                  getColor={(param) =>
                    value.getVariant({ [key]: () => param }).toCssValue()
                  }
                  max={hslaParamMaxValue[key]}
                  step={colorParameterStep[key]}
                />
                <Text weight="600">
                  {formatColorParameter[key](value[key])}
                </Text>
              </InputContainer>
            ))}
          </VStack>

          <CopyText
            style={{ textAlign: 'end' }}
            weight="600"
            content={value.toCssValue()}
          >
            {value.toCssValue()}
          </CopyText>
        </SeparatedByLine>
        <Preview
          style={{
            background: value.toCssValue(),
          }}
        />
      </UniformColumnGrid>
    </DemoPage>
  )
})
