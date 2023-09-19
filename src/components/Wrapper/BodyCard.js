import styles from "./BodyCard.module.css";

const BodyCard = ({ children }) => {
  return <div className={styles.bodyCard}>{children}</div>;
};

export default BodyCard;
