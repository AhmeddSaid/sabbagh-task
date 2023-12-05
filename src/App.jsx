import Intro from "./components/intro/Intro";
import ScrollButton from "./components/scrollButton/ScrollButton";
import Main from "./components/main/Main";
import Categories from "./components/categories/Categories";
import Banner from "./components/banner/Banner";
import ItemsForSale from "./components/itemsForSale/ItemsForSale";
import TrendingBrands from "./components/trendingBrands/TrendingBrands";
import PopularCategories from "./components/popularCategories/PopularCategories";
import Recommended from "./components/recommended/Recommended";
import SellWithUs from "./components/sellWithUs/SellWithUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Intro />
      <Main />
      <Categories />
      <Banner />
      <ItemsForSale />
      <TrendingBrands />
      <PopularCategories />
      <Recommended />
      <SellWithUs />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
