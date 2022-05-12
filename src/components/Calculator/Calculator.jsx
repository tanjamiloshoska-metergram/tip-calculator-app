import styles from "./Calculator.module.css";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import ConfigureCalculator from "../ConfigureCalculator/ConfigureCalculator";
const Calculator = () => {
  return (
    <div className={styles.calculatorWrapper}>
      <ConfigureCalculator />
      <CalculatorResult />
    </div>
  );
};

export default Calculator;
