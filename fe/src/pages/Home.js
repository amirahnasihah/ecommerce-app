import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/Banner/Services";

const Home = () => {
  const storeData = {
    name: "My Store",
  };

  return (
    <>
      <BannerSection myData={storeData} />
      <Services />
    </>
  );
};

export default Home;
