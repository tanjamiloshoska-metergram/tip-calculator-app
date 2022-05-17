import styles from "./CustomTipInput.module.css";

const customTipInput = ({
  isTxtFieldSet,
  onCustomTipChange,
  onTxtFieldTypeChange,
  handleTipChange,
  customTip,
}) => {
  return (
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
  );
};

export default customTipInput;
