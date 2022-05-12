import styles from "./ResetButton.module.css";

const ResetButton = ({ handleClick, isSelected }) => {
  return (
    <button
      className={
        isSelected
          ? [styles.resetButton, styles.selectedResetButton].join(" ")
          : styles.resetButton
      }
      onClick={handleClick}
    >
      RESET
    </button>
  );
};

export default ResetButton;
