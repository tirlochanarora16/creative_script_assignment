import Navigation from "components/Navigation";
import HotelsOverview from "./Hotels";
import PersonalOverview from "./Personal";

import styles from "./overview.module.css";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview_navigation}>
        <Navigation />
      </div>
      <div className={styles.overview_hotels}>
        <HotelsOverview />
      </div>
      <div className={styles.overview_personal}>
        <PersonalOverview />
      </div>
    </div>
  );
};

export default Overview;
