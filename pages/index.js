import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';


export default function index() {
  return (
    <>

    <div clssname="text-center">
      <Image src='/img.png' className='rounded' alt='img'width={200} height={200} />

    </div>

    <Head>
      <title>Welcome to nextjs</title>
    </Head>
    
   <div clssname="text-center"><button type="button" classname="btn btn-warning">Warning</button></div>


    
    </>
  )
}
