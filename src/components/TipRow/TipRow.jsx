import TipButton from "../TipButton/TipButton";
import styles from "./TipRow.module.css";
import { useState } from "react";
const TipRow = ({
  handleTipChange,
  selectedTip,
  onCustomTipChange,
  customTip,
  onError,
}) => {
  const [isTxtFieldSet, setTextField] = useState("text");
  const onTxtFieldTypeChange = (type) => {
    setTextField(type);
  };
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
          type={isTxtFieldSet === "text" ? "text" : "submit"}
          className={styles.tipInput}
          placeholder="CUSTOM"
          onChange={(e) => onCustomTipChange(e.target.value)}
          value={customTip}
          onKeyUp={(e) => {
            if (e.keyCode === 13) onTxtFieldTypeChange("submit");
          }}
          onDoubleClick={() => onTxtFieldTypeChange("text")}
          onClick={() => handleTipChange(customTip)}
        />
      </div>
    </div>
  );
};

export default TipRow;
