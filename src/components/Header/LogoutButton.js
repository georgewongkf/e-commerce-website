import { useDispatch } from "react-redux";
import { authenticationActions } from "../../store/Store";
import Button from "../UI/Button";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };
  return (
    <li className={styles.loginItem}>
      <Button buttonStyle={styles.logoutButton} onClick={logoutHandler}>
        Logout
      </Button>
    </li>
  );
};

export default LogoutButton;
