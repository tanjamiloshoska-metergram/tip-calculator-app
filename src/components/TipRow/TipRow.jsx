import TipButton from "../TipButton/TipButton";
import styles from "./TipRow.module.css";
import { useState } from "react";
import CustomTipInput from "../CustomTipInput/CustomTipInput";

const tipButtons = [
  {
    id: 1,
    tipValue: 5,
  },
  {
    id: 1,
    tipValue: 10,
  },
  {
    id: 1,
    tipValue: 15,
  },
  {
    id: 1,
    tipValue: 25,
  },
  {
    id: 1,
    tipValue: 50,
  },
];
const TipRow = ({
  handleTipChange,
  selectedTip,
  onCustomTipChange,
  customTip,
  onError,
}) => {
  const [isTxtFieldSet, setTextField] = useState("text");
  const onTxtFieldTypeChange = (type) => {
    setTextField(type);
  };

  const mapTipButtons = () => {
    return tipButtons.map((tip) => (
      <TipButton
        handleClick={handleTipChange}
        value={tip.tipValue}
        isSelected={tip.tipValue === selectedTip}
      />
    ));
  };
  return (
    <div className={styles.tipRowWrapper}>
      <p className={styles.tipRowTitle}>Select Tip %</p>
      <div>
        {mapTipButtons()}
        <CustomTipInput
          handleTipChange={handleTipChange}
          isTxtFieldSet={isTxtFieldSet}
          onCustomTipChange={onCustomTipChange}
          onTxtFieldTypeChange={onTxtFieldTypeChange}
          customTip={customTip}
        />
      </div>
    </div>
  );
};

export default TipRow;
