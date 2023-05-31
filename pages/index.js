import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';



export default function index() {
  return (
    <>

    <Head>
      <title>Welcome to nextjs</title>
    </Head>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>

  </div>
</nav>
    
<div className="text-center">
      <Image src='/img.jpg' className='rounded' alt='img'width={200} height={200} />

    </div>
    
   <div className="text-center"><button type="button" className="btn btn-warning">Warning</button></div>


    
    </>
  )
}
