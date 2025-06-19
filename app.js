import React, { useState }from "react";
import TShirt from "./TShirt";

const initialTShirts = [
  { id:1, name:"Blue T Shirt", 
image:"blue-t-shirt.jpg", 
price:20, stock:5 },
  { id:2, name:"Bright Purple T Shirt", 
image:"bright-purple-t-shirt.jpg", 
price:22, stock:4 },
  { id:3, name:"Cobalt Blue T Shirt",
 image:"cobalt-blue-t-shirt.jpg", 
price:24, stock:3 },
  { id:4, name:"Green T Shirt", 
image:"green-t-shirt.jpg", 
price:26, stock:2 },
  { id:5, name:"Grey T Shirt", 
image:"grey-t-shirt.jpg", 
price: 28, stock: 1 },

  { id:6, name:"Light Green T Shirt", 
image:"light-green-t-shirt.jpg", 
price:30, stock:0 },
  { id:7, name:"Purple T Shirt", 
image:"purple-t-shirt.jpg", 
price:32, stock:5 },
  { id:8, name:"Red T Shirt", 
image:"red-t-shirt.jpg", 
price:34, stock:4 },
  { id:9, name:"Teal T Shirt", 
image:"teal-t-shirt.jpg", 
price:36, stock:3 }
];


function App() {
  const [tshirts, setTShirts] =useState(initialTShirts);

  const handleBuy = (id, quantity) =>{
    setTShirts(prev =>
      prev.map(t =>
        t.id === id ? { ...t, stock: t.stock - quantity } : t
      )
    );
  };

  return (
    <div>
      <h1>T-Shirt Store
</h1>
      <div className=
"t-shirt-grid">
        {tshirts.map(tshirt =>(
          <TShirt key={tshirt.id} tshirt={tshirt} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}

export default App;

