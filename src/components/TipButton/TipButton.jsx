import styles from "./TipButton.module.css";
const TipButton = ({ children, handleClick, isSelected, value }) => {
  return (
    <button
      className={
        isSelected
          ? [styles.tipButton, styles.selectedTipButton].join(" ")
          : styles.tipButton
      }
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  );
};

export default TipButton;
