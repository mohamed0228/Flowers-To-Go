import React from 'react';
// import { SaleBanner } from '../../../public/images/Banners/SaleBanner';
import './sale.css'; 

function SaleBannerComponent() {
  return (
      <div className='sale-banner'>
      {/* <SaleBanner> */}
        <div>
        <img src= '/images/salesbanner.jpg' alt='shopping cart'/>
        </div>
      {/* </SaleBanner> */}
    </div>
  );
}

export default SaleBannerComponent;