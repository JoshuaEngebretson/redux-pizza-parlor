import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function CheckoutItem({ info }) {
    return (
        <>
            <tr>
                <td>{info.name}</td>
                <td>{info.price}</td>
            </tr>
        </>
    )
}

export default CheckoutItem;