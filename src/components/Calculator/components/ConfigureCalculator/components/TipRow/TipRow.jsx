import TipButton from "../../../../../TipButton/TipButton";
import TipTextField from "../../../../../TipTextField/TipTextField";
import styles from "./TipRow.module.css";
const TipRow = ({ handleChange, handleClick }) => {
  return (
    <div className={styles.tipRowWrapper}>
      <p className={styles.tipRowTitle}>Select Tip %</p>
      <div>
        <TipButton handleClick={handleClick}>5%</TipButton>
        <TipButton handleClick={handleClick}>10%</TipButton>
        <TipButton handleClick={handleClick}>15%</TipButton>
        <TipButton handleClick={handleClick}>25%</TipButton>
        <TipButton handleClick={handleClick}>50%</TipButton>
        <TipTextField handleChange={handleChange} />
      </div>
    </div>
  );
};

export default TipRow;
