import { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { HSLA } from "lib/ui/colors/HSLA";

import { SvgArc, polarToCartesian } from "./SvgArc";
import { SvgDisk } from "./SvgDisk";
import { sum } from "lib/shared/utils/sum";

export interface PieChartItem {
  value: number;
  color: HSLA;
}

interface Props {
  items: PieChartItem[];
}

const cutoutRadiusShare = 0.52;
const totalDegrees = 360;
const spaceBetweenInDegrees = 0;

interface PieChartItemWithAngle extends PieChartItem {
  startAngle: number;
  endAngle: number;
}

const getItemsWithAngles = (items: PieChartItem[]): PieChartItemWithAngle[] => {
  const total = sum(items.map((item) => item.value));

  const itemsWithAngles: PieChartItemWithAngle[] = [];

  items.forEach((item, index) => {
    const startAngle = index === 0 ? 0 : itemsWithAngles[index - 1].endAngle;
    const endAngle = startAngle + (item.value / total) * totalDegrees;

    itemsWithAngles.push({
      ...item,
      startAngle,
      endAngle,
    });
  });

  return itemsWithAngles;
};

const svgViewBoxSize = 100;
const svgContainerSize = 20;

const Label = styled.text`
  fill: ${({ theme }) => theme.colors.white.toCssValue()};
  font-size: 9px;
  font-weight: 500;
`;

export const PieChart = ({ items }: Props) => {
  const itemsWithAngles = useMemo(() => getItemsWithAngles(items), [items]);

  const { colors } = useTheme();

  const radius = svgViewBoxSize / 2;
  const cutoutRadius = radius * cutoutRadiusShare;

  const total = sum(items.map((item) => item.value));

  return (
    <svg viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}>
      {items.length < 2 ? (
        <SvgDisk
          color={items.length === 0 ? colors.backgroundGlass : items[0].color}
          radius={radius}
          cutoutRadius={cutoutRadius}
        />
      ) : (
        itemsWithAngles.map(({ color, startAngle, endAngle, value }, index) => {
          const labelAngle = startAngle + (endAngle - startAngle) / 2;
          const labelPosition = polarToCartesian(
            radius,
            cutoutRadius + (radius - cutoutRadius) / 2,
            labelAngle
          );
          const labelSide = svgContainerSize;
          labelPosition.x -= svgContainerSize / 2;
          labelPosition.y -= svgContainerSize / 2;

          const percentage = Math.round((value * 100) / total);

          return (
            <>
              <SvgArc
                key={index}
                color={color.getVariant({ l: () => 46, s: () => 40 })}
                radius={radius}
                cutoutRadius={cutoutRadius}
                startAngle={startAngle}
                endAngle={endAngle - spaceBetweenInDegrees}
              />
              {percentage > 5 && (
                <g>
                  <rect
                    fill="transparent"
                    {...labelPosition}
                    width={labelSide}
                    height={labelSide}
                  />
                  <Label
                    x={labelPosition.x + labelSide / 2}
                    y={labelPosition.y + labelSide / 2}
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    {percentage}
                    <tspan fontSize={5}>%</tspan>
                  </Label>
                </g>
              )}
            </>
          );
        })
      )}
    </svg>
  );
};
