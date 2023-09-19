import styles from "./ProductSection.module.css";
import { useSelector } from "react-redux";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

const ProductSection = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  return (
    <ul className={styles.productSection}>
      <EditProduct />
      {isAuthenticated && <AddProduct />}
    </ul>
  );
};

export default ProductSection;
