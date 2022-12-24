import { useState } from "react";

const CategoriesCheckBox = ({ category, handleCategoryQuery, handleChildren, categoryQuery }) => {
   const { _id, name, slug, children } = category;
   const [isParentChecked, setIsParentChecked] = useState(false);

   return (
      <div>
         <div className="px-10">
            <input onChange={ (e) => { handleChildren(e, children); setIsParentChecked(!isParentChecked) } } type="checkbox" checked={ isParentChecked ? 'checked' : '' } className="mx-2" />
            <span>{ name }</span>
         </div>
         <div className="ml-3">
            {
               children.map(child => <div key={ child._id } className="px-10">
                  <input onChange={ (e) => { handleCategoryQuery(e, child._id); (!e.target.checked) ? setIsParentChecked(false) : '' } }
                     type="checkbox"
                     checked={ categoryQuery.includes(child._id) ? 'checked' : '' }
                     value={ child._id }
                     name={ name }
                     className="mx-2"
                  />
                  <span>{ child.name }</span>
               </div>)
            }
         </div>

      </div>
   );
};

export default CategoriesCheckBox;