import styles from "./CardContacts.module.scss";
import {
  BigScribble,
  BlackCircle,
  Email,
  Telegram,
} from "../../../../../assets";

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

const CardContacts = ({
  title = "",
  subtitle = "",
  text = "",
  angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      <div className={styles.blackCircle}>
        <img src={BlackCircle} alt="BlackCircle" />
      </div>
      <div className={styles.content}>
        <div className={styles.left__content}>
          <div className={styles.title}>{title}</div>
          {/* {angleSettings?.src && (
          <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
          <img src={angleSettings.src} alt={angleSettings.src} />
          </div>
        )} */}
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.right__content}>
          <div className={styles.scribble}>
            <img src={BigScribble} alt="BigScribble" />
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src={Email} alt="Email" />
        </div>
        <div className={styles.icon}>
          <img src={Telegram} alt="Telegram" />
        </div>
      </div>
    </div>
  );
};

export default CardContacts;
