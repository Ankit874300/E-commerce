import React, { useEffect, useState } from 'react'
import './Populer.css'
// import data_product from '../Assests/data'
import Item from '../Item/Item'


 
const Populer = () => {
  const [populerProduct,setPopulerProduct]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/populerinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopulerProduct(data));
},[])

  return (
    <div className="populer">
        <h1>POPULER IN WOMENS</h1>
            <hr />
 <div className="populer-item">
    {populerProduct.map((item,i)=>{
        return < Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })}
 </div>
    </div>
  )
}

export default Populer