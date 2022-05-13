import TipRow from "../TipRow/TipRow";
import styles from "./ConfigureCalculator.module.css";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import { useForm } from "react-hook-form";

const ConfigureCalculator = ({
  onPeopleChange,
  onBillChange,
  onTipChange,
  selectedTip,
  numberOfPeople,
  bill,
  onCustomTipChange,
  customTip,
  onError,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.configureCalcWrapper}>
      <form onSubmit={handleSubmit(() => onError("NoError"))}>
        <div className={styles.labelWrapper}>
          <label className={styles.customTxtLabel}>Bill</label>
          <p className={styles.errorParagraph}>{errors.bill?.message}</p>
        </div>
        <div className={styles.inputWrapper}>
          <img src={dollar} alt="icon" className={styles.icon} />
          <input
            {...register("bill", {
              required: "Is required",
              pattern: {
                value: /^[.]?[0-9]+[.]?[0-9]*$/,
                message: "Can't be zero or negative or a string",
              },
            })}
            type="text"
            className={
              errors.bill
                ? [styles.customTxtField, styles.onErrorTxtField].join(" ")
                : styles.customTxtField
            }
            placeholder="0"
            onChange={(e) => onBillChange(e.target.value)}
            value={bill}
          />
        </div>
        <TipRow
          handleTipChange={onTipChange}
          selectedTip={selectedTip}
          onCustomTipChange={onCustomTipChange}
          customTip={customTip}
        />
        <div className={styles.labelWrapper}>
          <label className={styles.customTxtLabel}>Number of people</label>
          <p className={styles.errorParagraph}>
            {errors.numberOfPeople?.message}
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <img src={person} alt="icon" className={styles.icon} />
          <input
            {...register("numberOfPeople", {
              required: "Is required",
              pattern: {
                value: /^[1-9]+[0-9]*$/,
                message: "Can't be zero or negative or a string",
              },
            })}
            type="text"
            className={
              errors.numberOfPeople
                ? [styles.customTxtField, styles.onErrorTxtField].join(" ")
                : styles.customTxtField
            }
            placeholder="0"
            onChange={(e) => onPeopleChange(e.target.value)}
            value={numberOfPeople}
          />
        </div>
      </form>
    </div>
  );
};
export default ConfigureCalculator;
