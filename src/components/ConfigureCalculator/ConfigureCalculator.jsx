import CustomTextField from "../CustomTextField/CustomTextField";
import TipRow from "../TipRow/TipRow";
import styles from "./ConfigureCalculator.module.css";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";

const ConfigureCalculator = () => {
  return (
    <div className={styles.configureCalcWrapper}>
      <CustomTextField label={"Bill"} icon={dollar} />
      <TipRow />
      <CustomTextField label={"Number of People"} icon={person} />
    </div>
  );
};
export default ConfigureCalculator;
