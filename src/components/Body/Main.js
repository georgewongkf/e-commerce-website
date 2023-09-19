import styles from "./Main.module.css";

const Main = ({ pageStyle, children }) => {
  return (
    <main className={`${styles.main} ${pageStyle}`}>
      <div className={`${styles.content} ${pageStyle}`}>{children}</div>
    </main>
  );
};

export default Main;
