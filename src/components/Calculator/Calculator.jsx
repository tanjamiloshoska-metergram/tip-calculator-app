import styles from "./Calculator.module.css";
import CalculatorResult from "./components/CalculatorResult/CalculatorResult";
import ConfigureCalculator from "./components/ConfigureCalculator/ConfigureCalculator";
const Calculator = () => {
  return (
    <div className={styles.calculatorWrapper}>
      <ConfigureCalculator />
      <CalculatorResult />
    </div>
  );
};

export default Calculator;
