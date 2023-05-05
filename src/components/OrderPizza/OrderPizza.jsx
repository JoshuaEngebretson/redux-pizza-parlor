import { useSelector } from "react-redux";
import PizzaItem from "./PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
=======
import HeaderWithCart from "./HeaderWithCart/HeaderWithCart";
>>>>>>> main

function OrderPizza() {

  const pizzaArray = useSelector(state => state.pizzaReducer);
  console.log('pizzaArray inside of OrderPizza', pizzaArray);

  const history = useHistory();
<<<<<<< HEAD

  const customerInfoPage = () => {
    history.push("/customerInformation")
  }
=======
>>>>>>> main

  const customerInfoPage = () => {
    history.push("/customerInformation")
  }
  return (
    <>
<<<<<<< HEAD
=======
      <HeaderWithCart />
>>>>>>> main
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