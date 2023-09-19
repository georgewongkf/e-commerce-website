import { useSelector } from "react-redux";
import Product from "./Product";

const AddProduct = () => {
  const productDetails = useSelector((state) => state.productDetails.details);

  const authToken = useSelector((state) => state.authentication.authToken);

  const detailsLength = productDetails.length.toString();

  return (
    <Product
      id={detailsLength}
      editSource={`https://ecommercegwkf-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth=${authToken}`}
      editMethod="POST"
      editText="add"
      hasDeleteButton={false}
    />
  );
};

export default AddProduct;
