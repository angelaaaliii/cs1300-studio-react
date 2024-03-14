// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

export default function BakeryItem({onClick, name, description, price, pic}) {
  return (
    <div id = "bakeryItem">
      <div id = "name">
        {name}
      </div>
      <div id = "description">
        {description}
      </div>
      <div>
        {price}
      </div>
      
      <div>
      <img src={pic} width="100" height="100"/>
      </div>

      <button id = "cartButton"
        onClick = {onClick}
        title="Add to Cart"
        color="#841584"
      />
    </div>
  );
}
