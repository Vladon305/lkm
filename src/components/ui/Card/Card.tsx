import styles from "./Card.module.scss";

type Props = {
  title: string;
  subtitle?: string;
  text?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  template?: "white" | "yellow" | "work" | "contacts";
};

const Card = ({ title = "", subtitle = "", text = "", style }: Props) => {
  return (
    <div className={styles.card} style={style}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Card;
