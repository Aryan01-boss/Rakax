import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialsSection from "../components/TestimonialsSection";
import ChooseUs from "../components/ChooseUs";
import Contact from "../pages/Contact";
import "../styles/global.css";


const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCard />
      <ChooseUs />
      <TestimonialsSection />
      <Contact />

    </>
  );
};

export default Home;
