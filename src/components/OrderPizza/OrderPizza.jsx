import { useSelector } from "react-redux";
import PizzaItem from "./PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom";
import HeaderWithCart from "./HeaderWithCart/HeaderWithCart";
import Swal from "sweetalert2";

function OrderPizza() {

  const pizzaArray = useSelector(state => state.pizzaReducer);
  console.log('pizzaArray inside of OrderPizza', pizzaArray);

  const shoppingCart = useSelector(state => state.shoppingCart);

  const history = useHistory();

  const customerInfoPage = () => {
    if (shoppingCart.length > 0) {
      history.push("/customerInformation")
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'PLEASE BUY SOMETHING',
        text: 'You need to "Add" at least 1 item to your cart before moving forward'
      })
    }
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