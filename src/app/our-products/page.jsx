import Farmers from '@/components/home/Farmers';
import AboutUs from '@/components/OurProduct/AboutUs';
import ProductRange from '@/components/OurProduct/ProductRange';
import TopSeller from '@/components/OurProduct/TopSeller';
import { getProducts } from '@/actions/server/Product';
import React from 'react';
import CTA from '@/components/home/CTA';

const page = async () => {
    const products = await getProducts();
    return (
        <>
        <div className='w-full px-6'>
            <AboutUs></AboutUs>
        </div>
        <div  className="w-11/12 mx-auto">
            <ProductRange></ProductRange>
        </div>
         <div className="w-11/12 mx-auto">
            <TopSeller products={products}></TopSeller>
        </div>
        <div className="w-11/12 mx-auto">
            <Farmers></Farmers>
        </div>
       <div>
        <CTA></CTA>
       </div>
        </>
    );
};

export default page;