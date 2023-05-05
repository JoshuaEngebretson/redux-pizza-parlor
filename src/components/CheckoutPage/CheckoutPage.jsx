import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem/CheckoutItem";


function CheckoutPage() {

    const customerObj = useSelector(state => state.customerInformation);
    const shoppingCart = useSelector(state => state.shoppingCart);

    console.log('Customer obj:', customerObj);

    return (
        <div className="co-step">
            <h2>Step 3: Checkout</h2>
            <div>
                <h3>
                    {customerObj.customer_name}
                </h3>
                <h3>
                    {customerObj.street_address}
                </h3>
                <h3>
                    {customerObj.city}
                </h3>
                <h3>
                    {customerObj.zip}
                </h3>

                <h2>
                    {customerObj.type}
                </h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((info) => {
                        return (
                            <CheckoutItem
                                key={info.id}
                                info={info}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CheckoutPage;