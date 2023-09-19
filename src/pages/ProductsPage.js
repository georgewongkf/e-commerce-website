import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productDetailsActions } from "../store/Store";
import styles from "./ProductsPage.module.css";
import BodyCard from "../components/Wrapper/BodyCard";
import Title from "../components/Body/Title";
import Main from "../components/Body/Main";
import ProductSection from "../components/Products/ProductSection";

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const productDetailsResponse = await fetch(
      "https://ecommercegwkf-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );

    const products = await productDetailsResponse.json();

    const fetchedProducts = [];

    for (const product in products) {
      fetchedProducts.push({
        uid: product,
        id: products[product].id,
        price: products[product].price,
        name: products[product].name,
      });
    }

    dispatch(productDetailsActions.fetchDetails(fetchedProducts));
  }

  return (
    <BodyCard>
      <Title titleText="Products" isProductPage={true} />
      <Main pageStyle={styles.productPage}>
        <ProductSection />
      </Main>
    </BodyCard>
  );
};

export default ProductsPage;
