import TipButton from "../TipButton/TipButton";
import TipTextField from "../TipTextField/TipTextField";
import styles from "./TipRow.module.css";
const TipRow = ({ handleTipChange, selectedTip }) => {
  return (
    <div className={styles.tipRowWrapper}>
      <p className={styles.tipRowTitle}>Select Tip %</p>
      <div>
        <TipButton
          handleClick={handleTipChange}
          value={5}
          isSelected={5 === selectedTip}
        >
          5%
        </TipButton>
        <TipButton
          handleClick={handleTipChange}
          value={10}
          isSelected={10 === selectedTip}
        >
          10%
        </TipButton>
        <TipButton
          handleClick={handleTipChange}
          value={15}
          isSelected={15 === selectedTip}
        >
          15%
        </TipButton>
        <TipButton
          handleClick={handleTipChange}
          value={20}
          isSelected={20 === selectedTip}
        >
          25%
        </TipButton>
        <TipButton
          handleClick={handleTipChange}
          value={50}
          isSelected={50 === selectedTip}
        >
          50%
        </TipButton>
        <TipTextField handleChange={handleTipChange} />
      </div>
    </div>
  );
};

export default TipRow;
