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

  return (
    <div className={styles.calculatorWrapper}>
      <ConfigureCalculator
        onBillChange={onBillChange}
        onPeopleChange={onPeopleChange}
        onTipChange={onTipChange}
      />
      <CalculatorResult
        bill={bill}
        numberOfPeople={numberOfPeople}
        tipPercent={tipPercent}
      />
    </div>
  );
};

export default Calculator;
