import styles from "./ImageSection.module.css";

const ImageSection = ({ children }) => {
  return <div className={styles.imageSection}>{children}</div>;
};

export default ImageSection;
