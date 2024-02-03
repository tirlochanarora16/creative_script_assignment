import ContainerCard from "../Container";

import styles from "./personal.module.css";

const PersonalOverview = () => {
  return (
    <div className={styles.personal}>
      <ContainerCard title="Your Overview">Personal</ContainerCard>
    </div>
  );
};

export default PersonalOverview;
