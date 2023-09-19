import styles from "./TextSection.module.css";

const TextSection = ({ children }) => {
  return <ul className={styles.textSection}>{children}</ul>;
};

export default TextSection;
