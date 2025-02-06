import React from 'react';

import SingleProuducts from '../SingleProducts/SingleProuducts';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const productdata= useLoaderData()
    // console.log(productdata);
   
    return (
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-4 my-5 '>
        {productdata.map(productdata=><SingleProuducts key={productdata.id} productdata={productdata}></SingleProuducts>)}
    </div>
    );
};

export default Product;