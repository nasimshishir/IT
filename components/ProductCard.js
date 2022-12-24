
const ProductCard = ({ product }) => {
   const { _id, name, image, price, discount, description } = product;
   return (

      <div className="border rounded-md hover:shadow-lg">
         <div>
            <img src={ image } alt={ name } className="rounded-t-md" />
         </div>
         <div className="mx-5 my-5">
            <h3 className="text-center text-lg font-semibold">{ name }</h3>
            <h6 className="text-center font-bold"><span>Price:</span>{ price }</h6>
            <div className="flex justify-center mt-5">
               <button className="border rounded px-8 py-3">Add to Cart</button>

            </div>
         </div>

      </div>

   );
};

export default ProductCard;