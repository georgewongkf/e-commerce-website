import styles from "./ContactContent.module.css";
import Content from "./Content";
import TextSection from "./TextSection";
import TextTitle from "./TextTitle";
import TextDetail from "./TextDetail";
import ImageSection from "./ImageSection";
import Image from "./Image";
import contactImage from "../../assets/images/contact-us.jpg";

const ContactContent = () => {
  return (
    <>
      <Content>
        <TextSection>
          <TextTitle titleStyle={styles.title}>Email</TextTitle>
          <TextDetail textStyle={styles.text}>
            georgewongkf@gmail.com
          </TextDetail>
          <TextTitle titleStyle={styles.title}>LinkedIn</TextTitle>
          <TextDetail textStyle={styles.text}>
            <a
              href="https://linkedin.com/in/georgewongkf"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/georgewongkf
            </a>
          </TextDetail>
          <TextTitle titleStyle={styles.title}>Contact Number</TextTitle>
          <TextDetail textStyle={styles.text}>
            Please refer to the contact number in the resume
          </TextDetail>
          <TextTitle titleStyle={styles.title}>Location</TextTitle>
          <TextDetail textStyle={styles.text}>Hong Kong</TextDetail>
        </TextSection>
        <ImageSection>
          <Image
            titleText="let's get in touch!"
            titleStyle={styles.imageTitle}
            imageStyle={styles.image}
            source={contactImage}
            alt="contact"
          />
        </ImageSection>
      </Content>
    </>
  );
};

export default ContactContent;
