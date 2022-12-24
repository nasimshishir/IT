import Head from 'next/head'
import Products from "../../components/Products";
import Searchfilter from "../../components/Searchfilter";

const index = () => {
   return (
      <>
         <Head>
            <title>Products</title>
         </Head>
         <main className=''>
            <Searchfilter></Searchfilter>
            <Products></Products>
         </main>
      </>
   );
};

export default index;