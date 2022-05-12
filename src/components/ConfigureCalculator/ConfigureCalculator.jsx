import CustomTextField from "../CustomTextField/CustomTextField";
import TipRow from "../TipRow/TipRow";
import styles from "./ConfigureCalculator.module.css";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";

const ConfigureCalculator = ({ onPeopleChange, onBillChange, onTipChange }) => {
  return (
    <div className={styles.configureCalcWrapper}>
      <CustomTextField
        label={"Bill"}
        icon={dollar}
        handleChange={onBillChange}
      />
      <TipRow handleTipChange={onTipChange} />
      <CustomTextField
        label={"Number of People"}
        icon={person}
        handleChange={onPeopleChange}
      />
    </div>
  );
};
export default ConfigureCalculator;
