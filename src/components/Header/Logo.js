import styles from "./Logo.module.css";
import websiteLogo from "../../assets/images/E-commerce.png";

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logoImageContainer}>
          <img
            className={styles.logoImage}
            src={websiteLogo}
            alt="websiteLogo"
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
