import styles from "./HomeContent.module.css";
import Content from "./Content";
import TextSection from "./TextSection";
import TextTitle from "./TextTitle";
import TextDetail from "./TextDetail";
import { Link } from "react-router-dom";
import ImageSection from "./ImageSection";
import Image from "./Image";
import reactLogo from "../../assets/images/react-logo.svg";
import firebaseLogo from "../../assets/images/firebase-logo.svg";

const HomeContent = () => {
  return (
    <>
      <Content>
        <TextSection>
          <TextDetail>hello and Welcome!</TextDetail>
          <TextDetail>
            this is a e-commerce website built by George, Wong Kwai Fung.
          </TextDetail>
          <TextDetail>
            this website is primarily built with React.js and Firebase.
          </TextDetail>
          <TextTitle>to add/edit/delete the products:</TextTitle>
          <TextDetail>
            click&nbsp;
            <Link className={styles.link} to="/admin" target="_blank">
              here
            </Link>
            &nbsp;to login as the administrator
          </TextDetail>
          <TextDetail>
            <b>email</b>&nbsp;: admin@ecommercegwkf.com
          </TextDetail>
          <TextDetail>
            <b>password</b>&nbsp;: Adminecommerce1
          </TextDetail>
          <TextTitle>to know the rules of uploading the products:</TextTitle>
          <TextDetail>
            click&nbsp;
            <Link className={styles.link} to="/about">
              here
            </Link>
          </TextDetail>
          <TextDetail>
            <em>let's get Started!</em>
          </TextDetail>
        </TextSection>
        <ImageSection>
          <Image
            titleText="frontend"
            imageStyle={styles.image}
            source={reactLogo}
            alt="React.js"
            imageCaption="React.js"
          />
          <Image
            titleText="backend"
            imageStyle={styles.image}
            source={firebaseLogo}
            alt="Firebase"
            imageCaption="Firebase"
          />
        </ImageSection>
      </Content>
    </>
  );
};

export default HomeContent;
