import { degreesInCircle } from 'shared/utils/degreesToRadians'
import { getPointOnCircle } from 'shared/utils/getPointOnCircle'
import { toPercents } from 'shared/utils/toPercents'
import styled from 'styled-components'

interface Props {
  startAngle: number
  endAngle: number
  radius: number
  cutoutRadius: number
}

const labelWrapperSize = 20

const Label = styled.text`
  fill: ${({ theme }) => theme.colors.contrast.toCssValue()};
  font-size: 9px;
  font-weight: 500;
`

export const PieChartLabel = ({
  startAngle,
  endAngle,
  radius,
  cutoutRadius,
}: Props) => {
  const labelAngle = startAngle + (endAngle - startAngle) / 2
  const labelPosition = getPointOnCircle(
    radius,
    cutoutRadius + (radius - cutoutRadius) / 2,
    labelAngle
  )
  labelPosition.x -= labelWrapperSize / 2
  labelPosition.y -= labelWrapperSize / 2

  return (
    <g>
      <rect
        fill="transparent"
        {...labelPosition}
        width={labelWrapperSize}
        height={labelWrapperSize}
      />
      <Label
        x={labelPosition.x + labelWrapperSize / 2}
        y={labelPosition.y + labelWrapperSize / 2}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {Math.round(((endAngle - startAngle) * 100) / degreesInCircle)}
        <tspan fontSize={5}>%</tspan>
      </Label>
    </g>
  )
}
