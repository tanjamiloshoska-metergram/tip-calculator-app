import styles from "./TipButton.module.css";
const TipButton = ({ children, handleClick, isSelected }) => {
  return (
    <button
      className={
        isSelected
          ? [styles.tipButton, styles.selectedTipButton].join(" ")
          : styles.tipButton
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default TipButton;
