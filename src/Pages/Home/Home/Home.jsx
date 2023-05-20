import React from 'react';
import Banner from '../Banner/Banner';
import ToysGallary from '../ToysGallary/ToysGallary';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToysGallary></ToysGallary>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;