import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import '../components/FlowerCarousel/app.css';
import FlowerCarousel from '../components/FlowerCarousel';
import Footer from '../components/Footer';
import '../components/Footer/footer.css';
import SaleBanner from '../components/SaleBanner';
import '../components/SaleBanner/sale.css';
import ShippingBanner from '../components/ShippingBanner';
import ShippingDetail from '../components/ShippingDetail';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideFlowerCarousel: false,
      showHideSaleBanner: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideFlowerCarousel":
        this.setState({ showHideFlowerCarousel: true });
        break;
      case "showHideSaleBanner":
        this.setState({ showHideSaleBanner: true });
        break;
      default:
    }
  }

  render() {
    const { showHideFlowerCarousel, showHideSaleBanner } = this.state;
    return (
      <div className='container'>
        <div className='App'>
          {!showHideFlowerCarousel && <FlowerCarousel />}
        </div>
        {!showHideSaleBanner && <SaleBanner />}
        <ProductList />
        <ShippingBanner />
        <ShippingDetail />
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default Home;