import styles from "./CustomTextField.module.css";

const CustomTextField = ({ style, label, isSelected, icon }) => {
  return (
    <label className={styles.customTxtLabel}>
      {label}
      <div className={styles.inputWrapper}>
        <img src={icon} alt="icon" className={styles.icon} />
        <input
          type="text"
          style={style}
          className={
            isSelected
              ? [styles.customTxtField, styles.selectedTxtField].join(" ")
              : styles.customTxtField
          }
          placeholder="0"
        />
      </div>
    </label>
  );
};

export default CustomTextField;