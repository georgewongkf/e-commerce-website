import styles from "./Header.module.css";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default Header;
