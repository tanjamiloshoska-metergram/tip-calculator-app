import styles from "./TipButton.module.css";
const TipButton = ({ handleClick, isSelected, value }) => {
  return (
    <input
      type="submit"
      value={value + "%"}
      className={
        isSelected
          ? [styles.tipButton, styles.selectedTipButton].join(" ")
          : styles.tipButton
      }
      onClick={() => handleClick(value)}
    ></input>
  );
};

export default TipButton;
