import './PizzaItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function PizzaItem({ pizza }) {

  const [toggleRemove, setToggleRemove] = useState(false)

  const addToCart = () => {
    console.log(`this button will add ${pizza.name} to the redux cart`);
    setToggleRemove(true);
  }

  const removeFromCart = () => {
    console.log(`this button will remove ${pizza.name} from the redux cart`);
    setToggleRemove(false);
  }

  const addOrRemoveButton = () => {
    if (toggleRemove) {
      return <button className='pizza-button' onClick={removeFromCart}>Remove</button>

    }
    else {
      return <button className='pizza-button' onClick={addToCart}>Add</button>
    }
  }

  return (
    <div className="pizza-card">
      <img src={pizza.image_path} className='pizza-image' />
      <h3 className="pizza-names">{pizza.name}</h3>
      <p className='small-text'>{pizza.description}</p>
      <h4 className='card-price'>{pizza.price}</h4>
      <p>{addOrRemoveButton()}</p>
    </div>
  )
}

export default PizzaItem;