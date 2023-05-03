import { DemoPage } from "components/DemoPage";
import { Confetti } from "lib/ui/animations/Confetti";
import { Checkbox } from "lib/ui/inputs/Checkbox/Checkbox";
import type { NextPage } from "next";
import { useState } from "react";

const ConfettiPage: NextPage = () => {
  const [value, setValue] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <DemoPage title="Confetti">
      <div style={{ position: 'relative' }}>
        <Checkbox label="Confetti!" value={value} onChange={() => {
          const newValue = !value
          setValue(newValue)
          setShowConfetti(newValue)
        }} />
        {showConfetti && <Confetti x={20} y={20} />}
      </div>
    </DemoPage>
  )
};

export default ConfettiPage;