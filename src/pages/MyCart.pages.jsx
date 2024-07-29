import React from 'react'
import { BreadCrumbComponents, CartSectionComponents } from '../components'

const MyCartPages = () => {
  return (
    <div className='min-h-full '>
        <div className=" h-20 " id="categories"></div>
        <BreadCrumbComponents breadCrumbTitle={"My Cart"}/>
        <CartSectionComponents/>
    </div>
  )
}

export default MyCartPages