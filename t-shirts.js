import React from "react";

function TShirt({ tshirt, onBuy }) {
  return (
    <div className="t-shirt-card">
      <h3>{tshirt.name}</h3>
      <img src={`/images/${tshirt.image}`} 
alt={tshirt.name} width="200"/>
      <p>Price:${tshirt.price}</p>
      <p>
        {tshirt.stock > 0 ? `In Stock:${tshirt.stock}` : 
<strong>Out of Stock</strong>}
      </p>
      {tshirt.stock > 0 && (
        <>
          <select id= {`qty-${tshirt.id}`}>
            {Array.from({ length: tshirt.stock }, (_, i) =>(
              <option key={i + 1} 
value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button onClick={() =>{
            const qty=
parseInt(document.getElementById(`qty-${tshirt.id}`).value, 10);
            onBuy(tshirt.id, qty);
          }}>
            Buy
          </button>
        </>
      )}
    </div>
  );
}

export default TShirt;
