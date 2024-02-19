import stylesWhite from "./CardWhite.module.scss";
import stylesYellow from "./CardYellow.module.scss";
import stylesWork from "./CardWork.module.scss";
import stylesContacts from "./CardContacts.module.scss";
import stylesProject from "./CardProject.module.scss";
import stylesAngle from "./Angle.module.scss";
import InscriptionBlock from "../../../assets/InscriptionBlock.svg";
import BlackCircle from "../../../assets/blackCircle.svg";

type Props = {
  title: string;
  subtitle?: string;
  text?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
  template?: "white" | "yellow" | "work" | "contacts" | "project";
};

const styles = {
  white: stylesWhite,
  yellow: stylesYellow,
  work: stylesWork,
  contacts: stylesContacts,
  project: stylesProject,
};

const Card = ({
  title = "",
  subtitle = "",
  text = "",
  template = "white",
  angleSettings,
  style,
}: Props) => {
  return (
    <div className={styles[template].card} style={style}>
      <div className={styles[template].title}>{title}</div>
      {angleSettings?.src && (
        <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
          <img src={angleSettings.src} alt={angleSettings.src} />
        </div>
      )}
      {template === "yellow" && (
        <>
          <div className={styles[template].blackCircle}>
            <img src={BlackCircle} alt="circle" />
          </div>
          <div className={styles[template].inscriptionBlock}>
            <img src={InscriptionBlock} alt="InscriptionBlock" />
          </div>
        </>
      )}
      <div className={styles[template].subtitle}>{subtitle}</div>
      <div className={styles[template].text}>{text}</div>
    </div>
  );
};

export default Card;
