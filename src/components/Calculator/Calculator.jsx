import styles from "./Calculator.module.css";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import ConfigureCalculator from "../ConfigureCalculator/ConfigureCalculator";
import { useState } from "react";
const Calculator = () => {
  const [bill, setBill] = useState(0.0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercent, setTipPercent] = useState(0.0);

  const onPeopleChange = (newNumber) => {
    setNumberOfPeople(newNumber);
  };

  const onTipChange = (newTip) => {
    setTipPercent(newTip);
  };

  const onBillChange = (newBill) => {
    setBill(newBill);
  };

  const onReset = () => {
    setBill(0.0);
    setNumberOfPeople(1);
    setTipPercent(0.0);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <ConfigureCalculator
        onBillChange={onBillChange}
        onPeopleChange={onPeopleChange}
        onTipChange={onTipChange}
        selectedTip={tipPercent}
        numberOfPeople={numberOfPeople}
        bill={bill}
      />
      <CalculatorResult
        bill={bill}
        numberOfPeople={numberOfPeople}
        tipPercent={tipPercent}
        onReset={onReset}
      />
    </div>
  );
};

export default Calculator;
