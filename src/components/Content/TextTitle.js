import styles from "./TextTitle.module.css";

const TextTitle = ({ titleStyle, children }) => {
  return (
    <li className={`${styles.textTitle} ${titleStyle}`}>
      <h3>{children}</h3>
    </li>
  );
};

export default TextTitle;
