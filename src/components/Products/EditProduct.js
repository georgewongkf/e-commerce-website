import { useSelector } from "react-redux";
import Product from "./Product";

const EditProduct = () => {
  const productDetails = useSelector((state) => state.productDetails.details);
  const authToken = useSelector((state) => state.authentication.authToken);

  return (
    <>
      {productDetails.map((product) => (
        <Product
          key={product.uid}
          productKey={product.uid}
          id={product.id}
          name={product.name}
          price={product.price}
          editSource={`https://ecommercegwkf-default-rtdb.asia-southeast1.firebasedatabase.app/products/${product.uid}.json?auth=${authToken}`}
          editMethod="PUT"
          editText="edit"
          hasDeleteButton={true}
        />
      ))}
    </>
  );
};

export default EditProduct;
