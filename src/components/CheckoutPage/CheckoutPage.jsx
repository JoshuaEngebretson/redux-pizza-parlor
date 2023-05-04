import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

function CheckoutPage() {

    const CustInfo = useSelector(state => state.CustInfo);

    return (
        <div className="co-step">
            <h2>Step 3: Checkout</h2>
            <div>
                <h3>
                    {info.address}
                </h3>
                <h2>
                    {info.delivery}
                </h2>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                {CustInfo.map((info) => {
                return (
                    <CheckoutItem
                        key={info.id}
                        info={info}
                    />
                    )
                })}
            </table>
        </div>
    )
}

export default CheckoutPage;