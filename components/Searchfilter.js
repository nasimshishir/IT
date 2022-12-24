
const Searchfilter = () => {
   return (
      <div className="container mx-auto flex mt-10">
         <div className="px-10">
            <input type="checkbox" className="mx-2" />
            <span>All Category</span>
         </div>
         <div className="px-10">
            <input type="checkbox" className="mx-2" />
            <span>Mobile</span>
            <div className="ml-3">
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Apple</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Samsung</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>OnePlus</span>
               </div>
            </div>
         </div>
         <div className="px-10">
            <input type="checkbox" className="mx-2" />
            <span>Laptop</span>
            <div className="ml-3">
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Apple</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Dell</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>HP</span>
               </div>
            </div>
         </div>
         <div className="px-10">
            <input type="checkbox" className="mx-2" />
            <span>Bike</span>
            <div className="ml-3">
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>BMW</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Suzuki</span>
               </div>
               <div>
                  <input type="checkbox" className="mx-2" />
                  <span>Yamaha</span>
               </div>
            </div>
         </div>
         <div>
            <div>
               <input type="text" className="border rounded-md mx-3" />
               <span>Search</span>
            </div>
         </div>
      </div>
   );
};

export default Searchfilter;