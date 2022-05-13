import TipButton from "../TipButton/TipButton";
import styles from "./TipRow.module.css";
const TipRow = ({
  handleTipChange,
  selectedTip,
  onCustomTipChange,
  customTip,
}) => {
  return (
    <div className={styles.tipRowWrapper}>
      <p className={styles.tipRowTitle}>Select Tip %</p>
      <div>
        <TipButton
          handleClick={handleTipChange}
          value={5}
          isSelected={5 === selectedTip}
        />
        <TipButton
          handleClick={handleTipChange}
          value={10}
          isSelected={10 === selectedTip}
        />
        <TipButton
          handleClick={handleTipChange}
          value={15}
          isSelected={15 === selectedTip}
        />
        <TipButton
          handleClick={handleTipChange}
          value={20}
          isSelected={20 === selectedTip}
        />
        <TipButton
          handleClick={handleTipChange}
          value={50}
          isSelected={50 === selectedTip}
        />
        <input
          type="text"
          className={styles.tipInput}
          placeholder="CUSTOM"
          onChange={(e) => onCustomTipChange(e.target.value)}
          value={customTip}
        />
      </div>
    </div>
  );
};

export default TipRow;
