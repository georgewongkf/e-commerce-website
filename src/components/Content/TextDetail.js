import styles from "./TextDetail.module.css";

const TextDetail = ({ textStyle, children }) => {
  return (
    <li className={`${styles.textDetail} ${textStyle}`}>
      <p>{children}</p>
    </li>
  );
};

export default TextDetail;
