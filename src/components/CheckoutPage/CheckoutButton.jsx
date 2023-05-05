import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function CheckoutButton() {

    const history = useHistory();
    const disptach = useDispatch();

    const resetEverything = () => {
        dispatch({
            type: 'RESET_CUSTOMER_INFORMATION',
          })
        dispatch({
            type: 'RESET_SHOPPING_CART',
          })
        history.push('/')  
    }

    return(
        <button onClick = {resetEverything}>Checkout</button>
    )
}
export default CheckoutButton; 