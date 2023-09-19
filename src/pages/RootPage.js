import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import RootCard from "../components/Wrapper/RootCard";

const RootPage = () => {
  return (
    <>
      <RootCard>
        <Header />
        <Outlet />
      </RootCard>
    </>
  );
};

export default RootPage;
