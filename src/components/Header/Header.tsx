import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu__item}>Главная</div>
        <div className={styles.menu__item}>Портфолио</div>
        <div className={styles.menu__item}>Работа</div>
        <div className={styles.menu__item}>Контакты</div>
      </div>
    </div>
  );
};

export default Header;
