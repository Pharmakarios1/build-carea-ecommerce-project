import Hero from "./hero/Hero";
import Feature from "./Feature/Feature";
import BestSelling from "./BestSelling/BestSelling";
import Format from "../components/Format/Format";
import CTACategory from "./CTACategory/CTACategory";

const Layout = () => {
  return (
    <>
      <Hero />
      <Feature />
      <BestSelling />
      <CTACategory />
    </>
  );
};

export default Layout;
