import styles from "./OutputItem.module.css";
const OutputItem = ({ title, description, amount = "0.00" }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemHeader}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemDescription}>/{description}</p>
      </div>
      <p className={styles.amount}>${amount}</p>
    </div>
  );
};

export default OutputItem;
