import React,{useState} from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
// console.log(data);
  const [showItem,setShowItem] = useState(false);

  const handleClick=()=>{
     setShowItem(!showItem)
  }

  
  return (
    <div className='w-6/12 bg-gray-50 mx-auto p-4 shadow-lg mt-2' >
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>
          {data.title} ({data.itemCards.length})
          </span>
        <span>🔽</span>
      </div>

         {showItem && <ItemList items={data.itemCards}/>} 
    </div>
  )
}

export default RestaurantCategory
