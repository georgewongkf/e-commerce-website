import styles from "./Image.module.css";

const Image = ({
  titleStyle,
  titleText,
  imageStyle,
  source,
  alternative,
  imageCaption,
}) => {
  return (
    <figure className={styles.imageContainer}>
      <h4 className={`${styles.imageTitle} ${titleStyle}`}>{titleText}</h4>
      <img className={imageStyle} src={source} alt={alternative} />
      <figcaption className={styles.imageCaption}>{imageCaption}</figcaption>
    </figure>
  );
};

export default Image;
