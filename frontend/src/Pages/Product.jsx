import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {

  const {all_product, latest_products} = useContext(ShopContext);
  const {productId} = useParams(); //To get the productId here we use useParams
  const product = all_product.find((e) => e.id === Number(productId)) || latest_products.find((e) => e.id === Number(productId)); // here we try to find the productId with in the all_product data
  
  // console.log('params productID', productId);
  // console.log('product', product);
  
  return (
    <div className=''>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
