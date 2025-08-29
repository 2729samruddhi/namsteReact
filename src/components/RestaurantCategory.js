import React,{useState} from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
// console.log(data);
  const handleClick=()=>{
    setShowIndex();
  }

  
  return (
    <div className='w-6/12 bg-white mx-auto p-4 shadow-lg mt-2' >
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>
          {data.title} ({data.itemCards.length})
          </span>
        <span>🔽</span>
      </div>

         {showItems && <ItemList items={data.itemCards}/>} 
    </div>
  )
}

export default RestaurantCategory
