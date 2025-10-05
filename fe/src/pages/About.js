import { useProductContext } from "../context/productcontext";
import MoreInfo from "../components/Banner/MoreInfo";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    page: "About Us",
    name: myName,
  };

  return <MoreInfo myData={data} />;
};

export default About;
