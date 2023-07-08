import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { VStack } from "lib/ui/Stack"
import { HSLAParameter, hslaKeys, hslaParamMaxValue } from "lib/ui/colors/HSLA"
import { ColorParameterInput } from "components/ColorParameterInput"
import styled, { useTheme } from "styled-components"
import { useState } from "react"
import { Text } from "lib/ui/Text"
import { SameWidthChildrenRow } from "lib/ui/Layout/SameWidthChildrenRow"
import { Panel } from "lib/ui/Panel/Panel"
import { CopyText } from "lib/ui/CopyText"
import { SeparatedByLine } from "lib/ui/SeparatedByLine"

const colorParameterName: Record<HSLAParameter, string> = {
  h: "Hue",
  s: "Saturation",
  l: "Lightness",
  a: "Alpha",
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
    :last-child {
      justify-self: end;
    }
  }
`

const Preview = styled(Panel)`
  aspect-ratio: 1 / 1;
  display: flex;
`

const HSLAPage: NextPage = () => {
  const { colors } = useTheme()
  const [value, setValue] = useState(colors.primary)

  return (
    <DemoPage title="HSLA">
      <SameWidthChildrenRow minChildrenWidth={320} fullWidth gap={40}>
        <SeparatedByLine gap={40}>
          <VStack gap={20}>
            {hslaKeys.map((key) => (
              <InputContainer key={key}>
                <Text>{colorParameterName[key]}</Text>
                <ColorParameterInput
                  onChange={(parameter) => {
                    setValue(
                      value.getVariant({ [key]: () => parameter.toFixed(2) })
                    )
                  }}
                  value={value[key]}
                  getColor={(param) =>
                    value.getVariant({ [key]: () => param }).toCssValue()
                  }
                  max={hslaParamMaxValue[key]}
                  step={colorParameterStep[key]}
                />
                <Text weight="bold">
                  {formatColorParameter[key](value[key])}
                </Text>
              </InputContainer>
            ))}
          </VStack>

          <CopyText
            style={{ textAlign: "end" }}
            weight="bold"
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
      </SameWidthChildrenRow>
    </DemoPage>
  )
}

export default HSLAPage
