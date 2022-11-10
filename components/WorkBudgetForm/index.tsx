import { minutesInHour } from "date-fns/esm/fp";
import { formatDuration } from "lib/shared/utils/formatDuration";
import { DistributionBar } from "lib/ui/DistributionBar";
import { AmountInput } from "lib/ui/inputs/Slider/AmountInput";
import { TitledSection } from "lib/ui/Layout/TitledSection";
import { Panel } from "lib/ui/Panel/Panel";
import { VStack } from "lib/ui/Stack";
import { Controller, useWatch } from "react-hook-form";
import { useTheme } from "styled-components";
import { useWorkBudgetForm } from "./useWorkBudgetForm";

const minuteStep = 30;

const maxMinPerDay = 10 * minutesInHour;

export const WorkBudgetForm = () => {
  const form = useWorkBudgetForm();

  const { control } = form;

  const theme = useTheme();

  const workdayMinutes = useWatch({
    control,
    name: "workdayMinutes",
  });
  const weekendMinutes = useWatch({
    control,
    name: "weekendMinutes",
  });

  const workdayColor = theme.colors.attention;
  const weekendColor = theme.colors.primary;

  return (
    <Panel width={400}>
      <TitledSection title="Work Budget">
        <VStack fullWidth gap={16}>
          <VStack fullWidth gap={8}>
            <Controller
              control={control}
              name="workdayMinutes"
              render={({ field: { value, onChange } }) => (
                <AmountInput
                  min={0}
                  color={workdayColor}
                  label="Workday"
                  value={value}
                  onChange={onChange}
                  step={minuteStep}
                  max={maxMinPerDay}
                  formatValue={(value) => formatDuration(value, "min")}
                />
              )}
            />

            <Controller
              control={control}
              name="weekendMinutes"
              render={({ field: { value, onChange } }) => (
                <AmountInput
                  min={0}
                  label="Weekend"
                  color={weekendColor}
                  value={value}
                  onChange={onChange}
                  step={minuteStep}
                  max={maxMinPerDay}
                  formatValue={(value) => formatDuration(value, "min")}
                />
              )}
            />
          </VStack>
          <DistributionBar
            items={[
              { value: workdayMinutes * 5, color: workdayColor },
              { value: weekendMinutes * 2, color: weekendColor },
            ]}
          />
        </VStack>
      </TitledSection>
    </Panel>
  );
};
