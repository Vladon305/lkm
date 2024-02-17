import styles from "./DefaultButton.module.scss";

type Props = { text: string };

const DefaultButton = ({ text }: Props) => {
  return (
    <div className={styles.button}>
      <div className={styles.button__text}>{text}</div>
    </div>
  );
};

export default DefaultButton;
