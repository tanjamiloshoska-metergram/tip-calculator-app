import styles from "./ResetButton.module.css";

const ResetButton = ({ handleClick, style }) => {
  return (
    <button style={style} className={styles.resetButton} onClick={handleClick}>
      RESET
    </button>
  );
};

export default ResetButton;
