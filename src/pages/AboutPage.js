import BodyCard from "../components/Wrapper/BodyCard";
import Title from "../components/Body/Title";
import Main from "../components/Body/Main";
import AboutContent from "../components/Content/AboutContent";

const About = () => {
  return (
    <BodyCard>
      <Title titleText="About" />
      <Main>
        <AboutContent />
      </Main>
    </BodyCard>
  );
};

export default About;
