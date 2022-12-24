import { useEffect, useState } from "react";
import Head from 'next/head'
import Products from "../../components/Products";
import Searchfilter from "../../components/Searchfilter";

const index = () => {
   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [categoryQuery, setCategoryQuery] = useState([])
   const [nameQuery, setNameQuery] = useState('')

   useEffect(() => {
      console.log(categoryQuery, nameQuery);
      fetch(`http://localhost:5000/products?categories=${JSON.stringify(categoryQuery)}&name=${nameQuery}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setProducts(data);
            setIsLoading(false)
         })
   }, [categoryQuery, nameQuery])

   useEffect(() => {
      fetch(`http://localhost:5000/categories`)
         .then((res) => res.json())
         .then((data) => {
            setCategories(data);
            setIsLoading(false)
         })
   }, [])

   const handleCategoryQuery = (e, id) => {

      if (e.target.checked) {
         setCategoryQuery((old) => [...old, id]);
      } else {
         setCategoryQuery((old) => old.filter(categoryId => id !== categoryId));
      }

   }
   const handleChildren = (e, children) => {

      setCategoryQuery((old) => {
         const set = new Set(old);
         if (e.target.checked) {
            children.forEach(child => {
               if (!set.has(child._id)) {
                  set.add(child._id);
               }
            });
         } else {
            children.forEach(child => {
               if (set.has(child._id)) {
                  set.delete(child._id);
               }
            })
         }

         return [...set]
      });

   }



   const handleNameQuery = (e) => {
      setNameQuery(e.target.value);
   }

   return (
      <>
         <Head>
            <title>Products</title>
         </Head>
         <main className=''>
            <Searchfilter
               handleCategoryQuery={ handleCategoryQuery }
               setNameQuery={ setNameQuery }
               categories={ categories }
               handleNameQuery={ handleNameQuery }
               handleChildren={ handleChildren }
               categoryQuery={ categoryQuery }
            ></Searchfilter>
            <Products products={ products } isLoading={ isLoading }></Products>
         </main>
      </>
   );
};

export default index;