import { useSelector } from "react-redux";
import styles from "./NavigationBar.module.css";
import NavigationItem from "./NavigationItem";
import LogoutButton from "./LogoutButton";

const NavigationBar = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.bar}>
          <NavigationItem path="/" description="Home" />
          <NavigationItem path="/products" description="Products" />
          <NavigationItem path="/about" description="About" />
          <NavigationItem path="/contact" description="Contact" />
          {isAuthenticated && <LogoutButton />}
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
