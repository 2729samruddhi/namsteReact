import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
   const dispatch = useDispatch()
    const handleClearCart=()=>{
       dispatch(clearItem())
    }
  return (
    <div className='text-center mt-5 p-4'>
      <h1 className='text-2xl font-bold'>cart</h1>
      <button className='p-2 mt-2 rounded-lg bg-black text-white'onClick={handleClearCart}>Clear Cart</button>
      <div className='w-6/12 items-center m-auto'>
      {cartItems.length ===0 && (<h1>cart is empty.please Add Items to the cart!</h1>)}
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
