import {
  CardContacts,
  CardProject,
  CardWork,
  CardService,
  CardWhite,
  CardYellow,
} from "./Cards";

type Props = {
  title?: string;
  subtitle?: string;
  text?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  isScribble?: boolean;
  icon?: string;
  workImage?: string;
  angleSettings?: {
    src: string;
    position?: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  };
  template?: "white" | "yellow" | "work" | "contacts" | "project" | "service";
};

// const Carda = ({
//   title = "",
//   subtitle = "",
//   text = "",
//   template = "white",
//   angleSettings,
//   style,
// }: Props) => {
//   return (
//     <div
//       className={`${styles[template].card} ${
//         stylesCardSlice[angleSettings?.position || "right-bottom"]
//       }`}
//       style={style}
//     >
//       <div className={styles[template].title}>{title}</div>
//       {angleSettings?.src && (
//         <div className={stylesAngle[angleSettings.position || "right-bottom"]}>
//           <img src={angleSettings.src} alt={angleSettings.src} />
//         </div>
//       )}
//       {template === "yellow" && (
//         <>
//           <div className={styles[template].blackCircle}>
//             <img src={BlackCircle} alt="circle" />
//           </div>
//           <div className={styles[template].inscriptionBlock}>
//             <img src={InscriptionBlock} alt="InscriptionBlock" />
//           </div>
//         </>
//       )}
//       <div className={styles[template].subtitle}>{subtitle}</div>
//       <div className={styles[template].text}>{text}</div>
//     </div>
//   );
// };
const Card = ({ template = "white", ...props }: Props) => {
  switch (template) {
    case "white":
      return <CardWhite {...props} />;
    case "contacts":
      return <CardContacts {...props} />;
    case "yellow":
      return <CardYellow {...props} />;
    case "work":
      if (props.icon && props.workImage) {
        return (
          <CardWork icon={props.icon} workImage={props.workImage} {...props} />
        );
      } else {
        console.error("CardWork haven`t icon or workImage prop");
        return <></>;
      }
    case "service":
      return <CardService icon={props.icon} {...props} />;

    case "project":
      return <CardProject {...props} />;
    default:
      return <CardWhite {...props} />;
  }
};

export default Card;
