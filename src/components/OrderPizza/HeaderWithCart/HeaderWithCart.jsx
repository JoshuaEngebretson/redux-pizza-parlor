import { useSelector } from "react-redux";
import USDollar from "../../convertToUSD/convertToUSD";

function HeaderWithCart() {

    const shoppingCart = useSelector(state => state.shoppingCart);

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

    return(
        <>
            <p>🛒 Total: {addAllPrices()}</p>
        </>
    )
}

export default HeaderWithCart;