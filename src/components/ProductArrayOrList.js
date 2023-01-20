import React from 'react'

export default function ProductArrayOrList() {
//simple array without key and it will give you warning on key value of each product
//you can use the method indexOf to assign  the key values
    const fruits=["Apple","Banana","Orange","Mango","Pear"];
    //must create an array with an id
    const productsArray=[
        { id:1, 
            name:"Phone", 
            price: 5500
        },
         { id:2, 
        name:"Laptop", 
        price: 15000
         }, 
        { id:3, 
            name:"Ipod", 
            price: 1800
        }, 
        { id:4, 
            name:"Battery", 
            price: 500
        },
        { id:5, 
            name:"Computer", 
            price: 3700
        },
]
const fruitList= fruits.map((fruit, index)=> 
<h3 key={index}>{fruit}</h3>

);
    const productList= productsArray.map((product=>  
        
        <div>
           
        <h3 key ={ product.id}> {product.name} Price: ${product.price}</h3>
        </div> 
        ))
  return (
    <div>
        {fruitList}
        {productList}
    
    </div>
    
  )
}
