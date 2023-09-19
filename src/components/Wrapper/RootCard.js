import styles from "./RootCard.module.css";

const RootCard = ({ children }) => {
  return <div className={styles.rootCard}>{children}</div>;
};

export default RootCard;
