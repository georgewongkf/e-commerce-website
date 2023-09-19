import BodyCard from "../components/Wrapper/BodyCard";
import Title from "../components/Body/Title";
import Main from "../components/Body/Main";
import ContactContent from "../components/Content/ContactContent";

const ContactPage = () => {
  return (
    <BodyCard>
      <Title titleText="Contact" />
      <Main>
        <ContactContent />
      </Main>
    </BodyCard>
  );
};

export default ContactPage;
