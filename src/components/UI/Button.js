import styles from "./Button.module.css";

const Button = ({ buttonStyle, type, onClick, disabled, children }) => {
  return (
    <button
      className={`${styles.button} ${buttonStyle}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
