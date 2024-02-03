import Icons from "assets/svg";
import ContainerCard from "../Container";
import styles from "./hotels.module.css";

const HotelsOverview = () => {
  return (
    <div className={styles.hotels}>
      <ContainerCard
        title="Hotels Overview"
        rightIcon={<div className={styles.hotels_icon}>{Icons.arrow()}</div>}
      >
        1
      </ContainerCard>
    </div>
  );
};

export default HotelsOverview;
