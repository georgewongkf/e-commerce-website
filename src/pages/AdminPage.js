import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./AdminPage.module.css";
import { authenticationActions } from "../store/Store";
import authentication from "../components/Utility/Authentication";
import Button from "../components/UI/Button";

const AdminPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const navigate = useNavigate();

  const navigationHandler = (event) => {
    if (event.target === event.currentTarget) {
      navigate("/");
    }
  };

  const dispatch = useDispatch();

  let password = "password";

  if (isShown) {
    password = "undefined";
  } else {
    password = "password";
  }

  const showPasswordHandler = () => {
    setIsShown((prev) => !prev);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  let formIsValid = false;

  if (
    enteredEmail.includes("@") &&
    enteredEmail.includes(".com") &&
    enteredEmail[enteredEmail.indexOf(".") - 1] !== "@" &&
    enteredEmail.includes(" ") === false &&
    enteredPassword.trim("").length >= 6
  ) {
    formIsValid = true;
  }

  async function loginHandler(event) {
    event.preventDefault();
    setIsFailed(false);
    setIsLogging(true);
    const response = await authentication(
      "signInWithPassword",
      enteredEmail,
      enteredPassword
    );

    const data = await response.json();

    if (response.ok) {
      dispatch(authenticationActions.login(data.idToken));
      navigate("/");
    }
    if (response.status === 400) {
      setIsFailed(true);
      dispatch(authenticationActions.logout());
    }

    console.log(data);
  }

  return (
    <div className={styles.loginModal} onClick={navigationHandler}>
      <form className={styles.loginContainer}>
        <fieldset className={styles.loginForm}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
            onChange={emailInputHandler}
            required
          />
          <label className={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            className={styles.formInput}
            type={password}
            id="password"
            name="password"
            onChange={passwordInputHandler}
            minLength="6"
            required
          />

          <div className={styles.checkBox}>
            <input type="checkbox" onClick={showPasswordHandler} />
            <span className={styles.checkBoxText}>Show Password</span>
          </div>
          <div className={styles.formButton}>
            <Button
              disabled={!formIsValid}
              type="submit"
              buttonStyle={styles.confirmButton}
              onClick={loginHandler}
            >
              Login
            </Button>
            <Button onClick={navigationHandler}>Cancel</Button>
          </div>

          {isLogging && isFailed && (
            <h3 className={styles.failedMessage}>
              login unsuccessfully, please check the login credentials
            </h3>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default AdminPage;
