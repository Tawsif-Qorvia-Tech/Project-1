import Farmers from '@/components/home/Farmers';
import AboutUs from '@/components/OurProduct/AboutUs';
import ProductRange from '@/components/OurProduct/ProductRange';
import React from 'react';

const page = () => {
    return (
        <>
        <div className='w-full px-6'>
            <AboutUs></AboutUs>
        </div>
        <div  className="w-11/12 mx-auto">
            <ProductRange></ProductRange>
        </div>
        <div className="w-11/12 mx-auto">
            <Farmers></Farmers>
        </div>
        
        </>
    );
};

export default page;