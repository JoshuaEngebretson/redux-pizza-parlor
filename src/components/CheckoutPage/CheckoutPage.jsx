import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './CheckoutPage.css';


function CheckoutPage() {

    const history = useHistory();

    const addAllPrices = () => {
        let totalPrices = 0;
        for(let item of shoppingCart){
            totalPrices += Number(item.price);
            console.log('item:', item);
            }
        totalPrices = USDollar.format(totalPrices);
        console.log('totalPrices within HeaderWithCart:', totalPrices);
        return totalPrices;
    }

    const customerObj = useSelector(state => state.customerInformation);
    const shoppingCart = useSelector(state => state.shoppingCart);

    console.log('Customer obj:', customerObj);

    axios({
        method: 'POST',
        url: '/api/order',
        data: {
            customer_name: customerObj.customer_name,
            street_address: customerObj.street_address,
            city: customerObj.city,
            zip: customerObj.zip,
            type: customerObj.type,
            total: totalPrices,
            pizzas: shoppingCart
        }
    }).then((response) => {
        console.log('IN POSTING')
    }).catch((error) => {
        console.log('POSTING ERROR', error);
    })

    console.log('Customer obj:', customerObj);

    return (
        <div>
            <div className="co-head">
                <div>
                    <h2>Step 3: Checkout</h2>
                    <p className="co-address">
                        {customerObj.customer_name}
                    </p>
                    <p className="co-address">
                        {customerObj.street_address}
                    </p>
                    <p className="co-address">
                        {customerObj.city}
                    </p>
                    <p className="co-address">
                        {customerObj.zip}
                    </p>
                </div>
                <div>
                    <h2>
                        For {customerObj.type}
                </h2>
                </div>
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
            <button>Checkout</button>
        </div>
    )
}

export default CheckoutPage;