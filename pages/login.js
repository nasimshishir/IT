import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {
   const [error, setError] = useState('');
   const [user, setUser] = useState({});
   const router = useRouter();


   const userLogin = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      fetch("http://localhost:5000/login", {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ email, password })

      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.success) {
               setUser(data.user);
               localStorage.setItem('accessToken', data.accessToken);
               router.push('/products')
            } else {
               setError(data.message)
            }
         })
         .catch(e => {
            console.log(e);
            setError(e.message)
         })
   }

   return (
      <>
         <Head>
            <title>Login</title>
         </Head>
         <div className='container mx-auto flex justify-center items-center min-h-screen'>
            <div>
               <form onSubmit={ userLogin } className='border rounded-lg shadow-lg p-10'>
                  <h1 className="text-4xl font-bold text-center px-24">Login</h1>
                  <div className="my-5">

                     <input name="email" type="email" placeholder="email" className="w-full border rounded p-3" />
                  </div>
                  <div className="my-5">

                     <input name="password" type="password" placeholder="password" className="w-full border rounded p-3" />
                  </div>
                  {
                     error && <div className='my-5 text-center text-red-600 font-medium'>
                        <p>{ error }</p>
                     </div>

                  }
                  <div className="flex justify-center mt-6">
                     <button className="border  rounded-md px-16 py-3 bg-slate-600 text-white">Login</button>
                  </div>
               </form>
               <div className='flex justify-center mt-6'>
                  <Link href="/" ><button className="border rounded-md px-16 py-3">Home</button> </Link>
               </div>
            </div>
         </div>

      </>
   );
};

export default Login;