import styles from "./TipTextField.module.css";
const TipTextField = ({ handleChange }) => {
  return (
    <input
      type="text"
      className={styles.tipInput}
      placeholder="CUSTOM"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default TipTextField;
