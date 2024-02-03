import styles from "./container.module.css";

interface IProps {
  title: string;
  rightIcon?: JSX.Element;
  children: React.ReactNode;
}

const ContainerCard: React.FC<IProps> = ({ title, rightIcon, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <p>{title}</p>
        {rightIcon && <div className={styles.container_icon}>{rightIcon}</div>}
      </div>
      {children}
    </div>
  );
};

export default ContainerCard;
