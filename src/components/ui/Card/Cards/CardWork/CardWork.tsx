import styles from "./CardWork.module.scss";

type Props = {
  text?: string;
  icon: string;
  workImage: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
};

const CardWork = ({
  text = "",
  icon,
  workImage,
  angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      {/* {angleSettings?.src && (
        <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
          <img src={angleSettings.src} alt={angleSettings.src} />
        </div>
      )} */}
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.image}>
        <img src={workImage} alt="image" />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CardWork;
