import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartState, setCartState] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleClick(price, name) {
    setCartState(cartState + 1);
    setCartPrice(cartPrice + price);
    setCartItems([
      ...cartItems,
      name
    ]);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem 
          onClick={() => handleClick(item.price, item.name)}
          name = {item.name}
          description = {item.description}
          price = {item.price}
          pic = {item.image}
        >
          
        </BakeryItem> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
          {cartItems.map((name) => ( // TODO: map bakeryData to BakeryItem components
            <p>{name}</p>
          ))}

        {cartPrice}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
