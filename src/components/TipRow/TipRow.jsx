import TipButton from "../TipButton/TipButton";
import TipTextField from "../TipTextField/TipTextField";
import styles from "./TipRow.module.css";
const TipRow = ({ handleTipChange }) => {
  return (
    <div className={styles.tipRowWrapper}>
      <p className={styles.tipRowTitle}>Select Tip %</p>
      <div>
        <TipButton handleClick={handleTipChange} value={5}>
          5%
        </TipButton>
        <TipButton handleClick={handleTipChange} value={10}>
          10%
        </TipButton>
        <TipButton handleClick={handleTipChange} value={15}>
          15%
        </TipButton>
        <TipButton handleClick={handleTipChange} value={20}>
          25%
        </TipButton>
        <TipButton handleClick={handleTipChange} value={50}>
          50%
        </TipButton>
        <TipTextField handleChange={handleTipChange} />
      </div>
    </div>
  );
};

export default TipRow;
