import styles from "./AboutContent.module.css";
import Content from "./Content";
import TextSection from "./TextSection";
import TextTitle from "./TextTitle";
import TextDetail from "./TextDetail";
import ImageSection from "./ImageSection";
import Image from "./Image";
import productForm from "../../assets/images/product-form.png";

const AboutContent = () => {
  return (
    <>
      <Content>
        <TextSection>
          <TextDetail>
            the followings are the rules of updating the products.
          </TextDetail>
          <TextDetail>
            to avoid unexpected result, please pay attention to the followings:
          </TextDetail>
          <TextTitle> 1. The order of the uploaded products:</TextTitle>
          <TextDetail>
            from the&nbsp;
            <strong className={styles.strongWord}>earliest</strong>&nbsp;to
            the&nbsp;<strong className={styles.strongWord}>latest</strong>
            &nbsp;(from left to right)
          </TextDetail>
          <TextTitle>2. Add a new product/edit an uploaded product:</TextTitle>
          <TextDetail>
            the product image should be uploaded/updated&nbsp;
            <strong className={styles.strongWord}>first</strong>
          </TextDetail>
          <TextTitle>3. Delete an uploaded product:</TextTitle>
          <TextDetail>
            delete the&nbsp;
            <strong className={styles.strongWord}>latest</strong>
            &nbsp;product&nbsp;
            <strong className={styles.strongWord}>first</strong>
          </TextDetail>
          <TextTitle>4. Successful messages with their counters:</TextTitle>
          <TextDetail>
            they will be shown&nbsp;
            <strong className={styles.strongWord}>next to</strong>&nbsp;the
            product page title, i.e. Product
          </TextDetail>
        </TextSection>
        <ImageSection>
          <Image
            titleText="update form"
            imageStyle={styles.image}
            source={productForm}
          />
        </ImageSection>
      </Content>
    </>
  );
};

export default AboutContent;
