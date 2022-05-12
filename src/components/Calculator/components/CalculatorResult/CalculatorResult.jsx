import ResetButton from "../../../ResetButton/ResetButton";
import styles from "./CalculatorResult.module.css";
import OutputItem from "./components/OutputItem/OutputItem";
const CalculatorResult = () => {
  return (
    <div className={styles.calcResWrapper}>
      <div className={styles.results}>
        <OutputItem title={"Tip Amount"} description={"person"} />
        <OutputItem title={"Total"} description={"person"} />
      </div>
      <ResetButton />
    </div>
  );
};
export default CalculatorResult;
