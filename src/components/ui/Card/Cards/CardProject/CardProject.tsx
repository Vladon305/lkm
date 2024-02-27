import styles from "./CardProject.module.scss";

type Props = {
  title?: string;
  subtitle?: string;
  text?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
  template?: "white" | "yellow" | "work" | "contacts" | "project";
};

const CardProject = ({
  title = "",
  subtitle = "",
  text = "",
  //   angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      <div className={styles.title}>{title}</div>
      {/* {angleSettings?.src && (
        <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
          <img src={angleSettings.src} alt={angleSettings.src} />
        </div>
      )} */}
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CardProject;
