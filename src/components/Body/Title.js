import { useSelector } from "react-redux";
import styles from "./Title.module.css";

const Title = ({ titleStyle, titleText, isProductPage }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  const updatedImagesMessage = useSelector(
    (state) => state.productDetails.updatedImagesMessage
  );

  const updatedImagesCounter = useSelector(
    (state) => state.productDetails.updatedImagesCounter
  );

  const updatedDetailsMessage = useSelector(
    (state) => state.productDetails.updatedDetailsMessage
  );

  const updatedDetailsCounter = useSelector(
    (state) => state.productDetails.updatedDetailsCounter
  );

  const deletedProductsMessage = useSelector(
    (state) => state.productDetails.deletedProductsMessage
  );

  const deletedProductsCounter = useSelector(
    (state) => state.productDetails.deletedProductsCounter
  );

  return (
    <div className={styles.title}>
      <h2 className={styles.text}>{titleText}</h2>
      {isAuthenticated && isProductPage && updatedImagesMessage && (
        <h3 className={styles.updatedMessage}>
          {updatedImagesMessage ? (
            <span className={styles.updatedCounter}>
              ({updatedImagesCounter})
            </span>
          ) : (
            ""
          )}
          <span className={styles.messageItem}>image(s)</span>&nbsp;has
          been&nbsp;
          <span className={styles.messageAction}>uploaded</span>
          &nbsp;successfully
        </h3>
      )}
      {isAuthenticated && isProductPage && updatedDetailsMessage && (
        <h3 className={styles.updatedMessage}>
          {updatedDetailsMessage ? (
            <span className={styles.updatedCounter}>
              ({updatedDetailsCounter})
            </span>
          ) : (
            ""
          )}
          <span className={styles.messageItem}>detail(s)</span>&nbsp;has
          been&nbsp;
          <span className={styles.messageAction}>uploaded</span>
          &nbsp;successfully
        </h3>
      )}
      {isAuthenticated && isProductPage && deletedProductsMessage && (
        <h3 className={styles.updatedMessage}>
          {deletedProductsMessage ? (
            <span className={styles.updatedCounter}>
              ({deletedProductsCounter})
            </span>
          ) : (
            ""
          )}
          <span className={styles.messageItem}>products</span>&nbsp;has
          been&nbsp;
          <span className={styles.messageDeleteAction}>deleted</span>
          &nbsp;successfully
        </h3>
      )}
    </div>
  );
};

export default Title;
