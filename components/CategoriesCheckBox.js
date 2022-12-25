import { useState } from "react";

const CategoriesCheckBox = ({ category, handleCategoryQuery, handleChildren, categoryQuery }) => {
   const { _id, name, slug, children } = category;
   const [isParentChecked, setIsParentChecked] = useState(false);

   return (
      <div className="py-5">
         <div className="px-10">
            <input onChange={ (e) => { handleChildren(e, children); setIsParentChecked(!isParentChecked) } } type="checkbox" checked={ isParentChecked ? 'checked' : '' } className="mx-2" id={ `parent-${_id}` } />
            <label className="cursor-pointer" for={ `parent-${_id}` }>{ name }</label>
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
                     id={ `child-${child._id}` }
                  />
                  <label for={ `child-${child._id}` } className="cursor-pointer">{ child.name }</label>
               </div>)
            }
         </div>

      </div>
   );
};

export default CategoriesCheckBox;