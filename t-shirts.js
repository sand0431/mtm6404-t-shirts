const tshirts = [
  {
    title: 'blue-t-shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]


const Tshirt = ({ title, image, price, stock }) => {
  const buttonStyle = {
    backgroundColor: 'lightpink',
    width: '90px',
    fontSize: '10px',
    borderRadius: '5px',
    padding: '3px',
    
  };
return (
  <div style={{border:'2px solid black', padding:'3px', width:'200px', display:'inline-block', margin:10}}>
    <img src={image} alt={title} width= "200px" />
    <p><strong>{title}</strong></p>
    <p>Price: ${price}</p>
    {stock > 0 ?<p>Stock: {stock}</p> :<p style={{color: 'red' }}>Out of stock</p>}
    <button style={buttonStyle}>Add to cart</button>
  </div>
);
};
const App = () => {
    return (
      <div>
      <h1>T-shirts</h1>
      {tshirts.map((item, index) =>(
        <Tshirt
        key={index}
        title={item.title}
        image={item.image}
        price={item.price}
        stock={item.stock}
        />
      ))}
      </div>
    );
 };
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
