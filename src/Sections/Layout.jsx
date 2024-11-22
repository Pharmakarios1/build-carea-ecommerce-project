import Hero from "./hero/Hero";
import Feature from "./Feature/Feature";
import BestSelling from "./BestSelling/BestSelling";
import Format from "../components/Format/Format";
import CTACategory from "./CTACategory/CTACategory";
import CTA from "./CTA/CTA";
import ProductList from "./ProductList/ProductList";

const Layout = () => {
  return (
    <>
      <Hero />
      <Feature />
      <BestSelling />
      <CTACategory />
      <ProductList />
      <CTA />
    </>
  );
};

export default Layout;
