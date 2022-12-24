import CategoriesCheckBox from "./CategoriesCheckBox";

const Searchfilter = ({ handleCategoryQuery, categories, handleNameQuery, handleChildren, categoryQuery }) => {


   return (
      <div className="container mx-auto flex flex-wrap mt-10">
         {
            categories.map(category => <CategoriesCheckBox
               key={ category._id }
               category={ category }
               handleCategoryQuery={ handleCategoryQuery }
               handleChildren={ handleChildren }
               categoryQuery={ categoryQuery }
            ></CategoriesCheckBox>)
         }
         <div>
            <div>
               <input onChange={ (e) => handleNameQuery(e) } type="text" className="border rounded-md mx-3 p-2" />
               <span>Search</span>
            </div>
         </div>
      </div>
   );
};

export default Searchfilter;