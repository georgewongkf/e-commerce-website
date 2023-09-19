import { useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import BodyCard from "../components/Wrapper/BodyCard";
import Title from "../components/Body/Title";
import Main from "../components/Body/Main";
import HomeContent from "../components/Content/HomeContent";

const HomePage = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  return (
    <BodyCard>
      <Title titleText={isAuthenticated ? "Welcome!" : "Home"} />
      <Main pageStyle={styles.homePage}>
        <HomeContent />
      </Main>
    </BodyCard>
  );
};

export default HomePage;
