import React from 'react'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className='text-center mt-5 p-4'>
      <h1 className='text-2xl font-bold'>cart</h1>
      <div>
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
