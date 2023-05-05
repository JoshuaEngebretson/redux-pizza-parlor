import { useSelector } from "react-redux";
import PizzaItem from "./PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom";
import HeaderWithCart from "./HeaderWithCart/HeaderWithCart";

function OrderPizza() {

  const pizzaArray = useSelector(state => state.pizzaReducer);
  console.log('pizzaArray inside of OrderPizza', pizzaArray);

  const history = useHistory();

  const customerInfoPage = () => {
    history.push("/customerInformation")
  }
  return (
    <>
      <HeaderWithCart />
      <div className="pizza-container">
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
      <footer className="footer-button">
        <button className="next-button" onClick={customerInfoPage} >next</button>
      </footer>
    </>
  )
}

export default OrderPizza;