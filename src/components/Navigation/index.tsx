import { useState } from "react";
import styles from "./navigation.module.css";
import Icons from "assets/svg";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { home, graph, work, profile, logout } = Icons;

  const updateActiveTabColor = (id: number) =>
    activeTab === id ? "white" : "black";

  // top 4 navigation items
  const navItems = [
    home(updateActiveTabColor(0)),
    graph(updateActiveTabColor(1)),
    work(updateActiveTabColor(2)),
    profile(updateActiveTabColor(3)),
  ].map((item, index) => {
    return (
      <div
        key={index}
        className={styles.navigation_item}
        style={activeTab === index ? { background: "#3B75F6" } : {}}
        onClick={() => setActiveTab(index)}
      >
        {item}
      </div>
    );
  });

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_pages}>{navItems}</div>

      {/* logout button */}
      <div title="Logout" className={`${styles.navigation_item}`}>
        {logout()}
      </div>
    </div>
  );
};

export default Navigation;
