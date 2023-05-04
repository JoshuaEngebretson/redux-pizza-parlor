import { useSelector } from "react-redux";
import PizzaItem from "./PizzaItem/PizzaItem";

function OrderPizza() {

  const pizzaArray = useSelector(state => state.pizzaReducer);
  console.log('pizzaArray inside of OrderPizza', pizzaArray);


  return (
    <div className="pizza-container">
      <h1>Hello from OrderPizza</h1>
      {
        pizzaArray.map((pizza) => {
          return (
            <PizzaItem
              key={pizza.id}
              pizza={pizza}
            />
          )
        })
      }
    </div>
  )
}

export default OrderPizza;