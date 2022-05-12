import styles from "./TipButton.module.css";
const TipButton = ({ children, handleClick, style }) => {
  return (
    <button style={style} className={styles.tipButton} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TipButton;
