import styles from "./Product.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsActions } from "../../store/Store";
import { storage } from "../Utility/Firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import Button from "../UI/Button";
import productRequest from "../Utility/ProductRequest";

const Product = ({
  productKey,
  id,
  name,
  price,
  editSource,
  editMethod,
  editText,
  hasDeleteButton,
}) => {
  const [productImages, setProductImages] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [enteredName, setenteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  const authToken = useSelector((state) => state.authentication.authToken);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails.details);

  const detailsLength = productDetails.length.toString();

  const imagesReference = ref(storage, `images/${id}.jpg`);

  useEffect(() => {
    if (id < detailsLength)
      getDownloadURL(imagesReference).then((url) => setProductImages(url));
  }, []);

  const enteredNameHandler = (event) => {
    setenteredName(event.target.value);
  };

  const enteredPriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  async function selectedImageHandler(event) {
    setSelectedImage(event.target.files[0]);
  }

  const editHandler = () => {
    setIsDisabled(false);
    setIsWaiting(false);
    setIsEditing(true);
  };

  const deleteHandler = () => {
    setIsDisabled(true);
    setIsWaiting(false);
    setIsDeleting(true);
  };

  async function confirmEditImageHandler(event) {
    event.preventDefault();
    setIsEditing(false);
    setIsDisabled(true);
    setIsWaiting(true);

    if (selectedImage == null) return;

    const uploadResponse = await uploadBytes(imagesReference, selectedImage);

    if (uploadResponse.updated !== "") {
      dispatch(productDetailsActions.updateImageMessage());
    }
  }

  async function confirmEditHandler(event) {
    event.preventDefault();
    setIsEditing(false);
    setIsDisabled(true);
    setIsWaiting(true);

    if (selectedImage === null && productImages === "") {
      uploadBytes(imagesReference, `images/${id}.jpg`);
    }

    const editResponse = await productRequest(editSource, editMethod, {
      id: id,
      name: enteredName,
      price: enteredPrice,
    });

    if (editResponse.ok) {
      dispatch(productDetailsActions.updateDetailMessage());
    }
  }

  async function confirmDeleteHandler(event) {
    event.preventDefault();
    setIsEditing(false);
    setIsDeleting(false);
    setIsDisabled(true);
    setIsWaiting(true);

    const deleteDetailsResponse = await productRequest(
      `https://ecommercegwkf-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productKey}.json?auth=${authToken}`,
      "DELETE"
    );

    if (deleteDetailsResponse.ok) {
      dispatch(productDetailsActions.deleteProductMessage());
    }
  }

  const cancelHandler = () => {
    setIsEditing(false);
    setIsDeleting(false);
    setIsDisabled(true);
    setIsWaiting(true);
  };

  let editingStyles = "";

  if (!isDisabled) {
    editingStyles = styles.editing;
  }

  return (
    <li className={styles.productsContainer}>
      <div className={styles.detailsContainer}>
        {isAuthenticated && (
          <h4 className={`${styles.productTitle} ${styles.productImageTitle}`}>
            Product Image
          </h4>
        )}
        {id < detailsLength && !isEditing && (
          <img className={styles.productImage} src={productImages} alt={name} />
        )}
        <form className={styles.form}>
          {isAuthenticated && isEditing && (
            <>
              <div className={styles.editImageContainer}>
                <input
                  type="file"
                  id="selectImageButton"
                  onChange={selectedImageHandler}
                  className={styles.selectImageButton}
                />
                <Button
                  type="submit"
                  buttonStyle={styles.confirmImageButton}
                  onClick={confirmEditImageHandler}
                >
                  confirm
                </Button>
              </div>
            </>
          )}
          <fieldset className={styles.inputField} disabled={isDisabled}>
            <label className={styles.productTitle} htmlFor={id}>
              product
            </label>
            <input
              type="text"
              id={id}
              className={`${styles.productDetails} ${editingStyles}`}
              defaultValue={name}
              onChange={enteredNameHandler}
              required
            />
            <label className={styles.productTitle} htmlFor={id + 1}>
              price
            </label>
            <input
              type="text"
              id={id + 1}
              className={`${styles.productDetails} ${editingStyles}`}
              defaultValue={price}
              onChange={enteredPriceHandler}
              required
            />
          </fieldset>
        </form>
        <div className={styles.editContainer}>
          {isAuthenticated && isWaiting && (
            <div className={styles.editButtonContainer}>
              <Button buttonStyle={styles.editButton} onClick={editHandler}>
                {editText}
              </Button>
            </div>
          )}
          {isAuthenticated && isWaiting && hasDeleteButton && (
            <Button buttonStyle={styles.editButton} onClick={deleteHandler}>
              delete
            </Button>
          )}
          {isAuthenticated && isEditing && (
            <Button
              type="submit"
              buttonStyle={styles.editButton}
              onClick={confirmEditHandler}
            >
              confirm
            </Button>
          )}
          {isAuthenticated && isDeleting && hasDeleteButton && (
            <Button
              type="submit"
              buttonStyle={styles.editButton}
              onClick={confirmDeleteHandler}
            >
              delete
            </Button>
          )}
          {isAuthenticated && (isEditing || isDeleting) && (
            <Button buttonStyle={styles.cancelButton} onClick={cancelHandler}>
              cancel
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Product;
