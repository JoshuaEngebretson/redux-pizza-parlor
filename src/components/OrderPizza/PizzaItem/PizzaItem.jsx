import './PizzaItem.css';

function PizzaItem({pizza}) {

  return (
    <div className="pizza-card">
      <img src={pizza.image_path}  className='square'/>
      <h3>{pizza.name}</h3>
      <p className='small-text'>{pizza.description}</p>
      <h4>{pizza.price}</h4>
    </div>
  )
}

export default PizzaItem;