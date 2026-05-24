import { getProducts } from '@/actions/server/Product';
import ProductManagement from '@/components/dashboard/ProductManagement/ProductManagement';
import React from 'react';

const page = async() => {
    const products = await getProducts();
    return (
        <div>
            <ProductManagement products={products} />
        </div>
    );
};

export default page;