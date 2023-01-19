import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { AmountTextInput } from "lib/ui/inputs/AmountTextInput";
import { DollarIcon } from "lib/ui/icons/DollarIcon";
import { useState } from "react";
import { AmountSuggestion } from "lib/ui/inputs/AmountSuggestion";

const AmountInputPage: NextPage = () => {
  const [value, setValue] = useState<number | undefined>(80000);

  return (
    <DemoPage title="Amount Input">
      <div style={{ width: 320 }}>
        <AmountTextInput
          type="number"
          value={value}
          label="Salary"
          placeholder="Enter amount"
          onValueChange={setValue}
          unit={<DollarIcon />}
          suggestion={
            <AmountSuggestion name="Max" value={100000} onSelect={setValue} />
          }
        />
      </div>
    </DemoPage>
  );
};

export default AmountInputPage;
