import styles from "./CardWhite.module.scss";
// import { BlackCircle, InscriptionBlock } from "../../../../../assets";

type Props = {
  title?: string;
  subtitle?: string;
  text?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
};

const CardWhite = ({
  title = "",
  subtitle = "",
  text = "",
  //   angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CardWhite;
