import styles from "./Content.module.css";

const Content = ({ children }) => {
  return <div className={styles.contentContainer}>{children}</div>;
};

export default Content;
