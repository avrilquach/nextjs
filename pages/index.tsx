import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function Home(){
  const router = useRouter();

  const handleClick = () =>{
    console.log('placing your order')
    router.push('/products')  
  }
  return(
    <div>
      <h1>HomePage</h1>
      <Link href='/about'>
        <a>About Us</a>
      </Link>
      <Link href='/products'>
        <a>Products</a>
      </Link>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <Link href='/placeorder'>
        <a>Place Order</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default Home
