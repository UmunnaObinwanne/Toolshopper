import AllCategoryPage from "../ProductsAndCategoriesPage/AllCategoryPage/AllCategoryPage";
import AccordionPage from "./Frontpage-Components/AccordionPage";
import FeaturesSection from "./Frontpage-Components/FeaturesSection";
import ProductPage from "./Frontpage-Components/FrontPageProducts";
import Hero from "./Frontpage-Components/Hero";

function FrontpageLayout() {
  return (
    <div>
      <Hero />
      <AllCategoryPage />
      <ProductPage />
      <FeaturesSection />
      <AccordionPage />
    </div>
  );
}

export default FrontpageLayout;
