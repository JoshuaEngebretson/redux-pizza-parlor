import './PizzaItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function PizzaItem({ pizza }) {

  const [toggleRemove, setToggleRemove] = useState(false)
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log(`this button will add ${pizza.name} to the redux cart`);
    dispatch({
      type: 'ADD_TO_CART',
      payload: pizza
    })
    setToggleRemove(true);
  }

  const removeFromCart = () => {
    console.log(`this button will remove ${pizza.name} from the redux cart`);
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: pizza
    })
    setToggleRemove(false);
  }

  const addOrRemoveButton = () => {
    if (toggleRemove) {
      return <div onClick={removeFromCart} className="pizza-button">Remove</div>

    }
    else {
      return <div onClick={addToCart} className="pizza-button">Add</div>
    }
  }

  return (
    <>
      <div className="pizza-card">
        <img src={pizza.image_path} className='pizza-image' />
        <h3 className="pizza-names">{pizza.name}</h3>
        <p className='small-text'>{pizza.description}</p>
        <h4 className='card-price'>{pizza.price}</h4>
        {addOrRemoveButton()}
      </div>
    </>
  )
}

export default PizzaItem;