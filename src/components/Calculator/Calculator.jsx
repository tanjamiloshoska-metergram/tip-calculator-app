import styles from "./Calculator.module.css";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import ConfigureCalculator from "../ConfigureCalculator/ConfigureCalculator";
import { useState } from "react";
const Calculator = () => {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [customTipPercent, setCustomTipPercent] = useState("");
  const [errorMsg, setErrorMsg] = useState("Error");

  const onError = (err) => {
    setErrorMsg(err);
  };
  const onPeopleChange = (newNumber) => {
    setNumberOfPeople(newNumber);
    setErrorMsg("Error");
  };

  const onCustomTipChange = (newTip) => {
    setTipPercent(newTip);
    setCustomTipPercent(newTip);
    setErrorMsg("Error");
  };
  const onTipChange = (newTip) => {
    setTipPercent(newTip);
    setErrorMsg("Error");
  };

  const onBillChange = (newBill) => {
    setBill(newBill);
    setErrorMsg("Error");
  };

  const onReset = () => {
    setBill("");
    setNumberOfPeople("");
    setTipPercent("");
    setErrorMsg("Error");
  };

  return (
    <div className={styles.calculatorWrapper}>
      <ConfigureCalculator
        onBillChange={onBillChange}
        onPeopleChange={onPeopleChange}
        onTipChange={onTipChange}
        onCustomTipChange={onCustomTipChange}
        customTip={customTipPercent}
        selectedTip={tipPercent}
        numberOfPeople={numberOfPeople}
        bill={bill}
        onError={onError}
      />
      {errorMsg === "Error" ? (
        <CalculatorResult
          bill={0.0}
          numberOfPeople={1}
          tipPercent={0.0}
          onReset={onReset}
        />
      ) : (
        <CalculatorResult
          bill={bill}
          numberOfPeople={numberOfPeople}
          tipPercent={tipPercent}
          onReset={onReset}
        />
      )}
    </div>
  );
};

export default Calculator;
