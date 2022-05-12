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
      disabled={isSelected}
    >
      RESET
    </button>
  );
};

export default ResetButton;
