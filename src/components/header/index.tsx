import person from "assets/header/person.png";
import Icons from "assets/svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_company}>
        <a href="/">creativescript</a>
      </div>
      <div className={styles.header_profile}>
        <div className={styles.header_search}>{Icons.search()}</div>
        <div className={styles.header_user}>
          <img src={person} alt="user profile icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
