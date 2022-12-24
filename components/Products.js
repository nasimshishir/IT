import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch("http://localhost:5000/products").then((res) => res.json()).then((data) => setProducts(data))
   }, [])
   return (
      <div className='container mx-auto grid grid-cols-3 gap-10 my-20'>
         {
            products.map(product => <ProductCard key={ product._id } product={ product }></ProductCard>)
         }
      </div >
   );
};

export default Products;