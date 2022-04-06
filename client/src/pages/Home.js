import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../components/Carousel/app.css';
import CarouselComponent from "../components/Carousel";
import Footer from "../components/Footer";
import '../components/Footer/footer.css'
//  import DropDownB from "../components/DropDownA";

const Home = () => {
  return (
    <div className="container">
       <div className="App">
      <CarouselComponent />
    </div>  
      {/* <ProductList /> */}
      <CategoryMenu />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
