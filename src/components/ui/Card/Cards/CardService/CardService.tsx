import styles from "./CardService.module.scss";

type Props = {
  title?: string;
  text?: string;
  icon?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
  template?: "white" | "yellow" | "work" | "contacts" | "project";
};

const CardService = ({
  title = "",
  text = "",
  icon,
  angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      {icon && (
        <div className={styles.icon}>
          <img src={icon} alt="icon" />
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
export default CardService;
