import styles from "./CardYellow.module.scss";
// import stylesAngle from "../../Angle.module.scss";
// import stylesCardSlice from "../../CardSlice.module.scss";
import { BlackCircle, Scribble } from "../../../../../assets";

type Props = {
  title?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  isScribble?: boolean;
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
};

const CardYellow = ({
  title = "",
  isScribble = false,
  angleSettings,
  style,
}: Props) => {
  return (
    <div className={`${styles.card}`} style={style}>
      <div className={styles.card__container}>
        <div className={styles.title}>{title}</div>
        {/* {angleSettings?.src && (
          <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
            <img src={angleSettings.src} alt={angleSettings.src} />
          </div>
        )} */}
        <div className={styles.blackCircle}>
          <img src={BlackCircle} alt="circle" />
        </div>
        {isScribble && (
          <div className={styles.scribble}>
            <img src={Scribble} alt="scribble" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardYellow;
