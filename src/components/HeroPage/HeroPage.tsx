import Header from "../Header/Header";
import styles from "./HeroPage.module.scss";
import thunderRight from "../../assets/thunder_1.svg";
import thunderLeft from "../../assets/Thunder_2.svg";

const HeroPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div
          className={`${styles._white__text} ${styles.text} ${styles.realization}`}
        >
          воплощение
        </div>
        <div className={styles.yours__container}>
          <img
            src={thunderLeft}
            alt=""
            className={`${styles.thunder} ${styles.thunderLeft}`}
          />
          <div
            className={`${styles.text} ${styles.yours} ${styles.center__text}`}
          >
            <div>ваших</div>
          </div>
          <img
            src={thunderRight}
            alt=""
            className={`${styles.thunder} ${styles.thunderRight}`}
          />
        </div>
        <div className={`${styles.ideas__container} ${styles.center__text}`}>
          <div className={`${styles.text} ${styles.ideas}`}>идей</div>
        </div>
      </div>
      <div className={styles.offer__container}>
        <div className={`${styles._white__text} ${styles.offer}`}>
          Давайте обсудим ваш проект
        </div>
        <div className={styles.start}>
          <div className={styles.start__text}>Начать проект</div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
