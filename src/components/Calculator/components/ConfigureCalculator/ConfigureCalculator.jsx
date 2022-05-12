import CustomTextField from "../../../CustomTextField/CustomTextField";
import dollar from "../../../../assets/icon-dollar.svg";
import person from "../../../../assets/icon-person.svg";
import styles from "./ConfigureCalculator.module.css";
import TipRow from "./components/TipRow/TipRow";

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
