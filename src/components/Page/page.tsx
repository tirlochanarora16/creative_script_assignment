import Overview from "components/Overview";
import Header from "../Header";

import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <Overview />
      </div>
    </>
  );
};

export default Page;
