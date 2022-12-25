import ProductCard from "./ProductCard";

const Products = ({ products, isLoading }) => {

   return (
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 px-10'>
         {
            !isLoading ? products.map(product => <ProductCard key={ product._id } product={ product }></ProductCard>) :
               <p className="text-center text-4xl font-bold">Loading...</p>
         }
      </div >
   );
};

export default Products;