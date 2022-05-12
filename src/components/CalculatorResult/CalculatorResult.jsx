import ResetButton from "../ResetButton/ResetButton";
import styles from "./CalculatorResult.module.css";
import OutputItem from "../OutputItem/OutputItem";
const CalculatorResult = ({ tipPercent, numberOfPeople, bill }) => {
  const totalTip = () => {
    return (parseFloat(bill) * (parseFloat(tipPercent) / 100)).toFixed(2);
  };
  const tipPerPerson = () => {
    return (parseFloat(totalTip()) / parseFloat(numberOfPeople)).toFixed(2);
  };

  const totalPerPerson = () => {
    return (
      (parseFloat(totalTip()) + parseFloat(bill)) /
      parseFloat(numberOfPeople)
    ).toFixed(2);
  };

  return (
    <div className={styles.calcResWrapper}>
      <div className={styles.results}>
        <OutputItem
          title={"Tip Amount"}
          description={"person"}
          amount={tipPerPerson()}
        />
        <OutputItem
          title={"Total"}
          description={"person"}
          amount={totalPerPerson()}
        />
      </div>
      <ResetButton />
    </div>
  );
};
export default CalculatorResult;
