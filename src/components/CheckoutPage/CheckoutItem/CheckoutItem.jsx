import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function CheckoutItem({ info }) {
    return (
        <>
            <tr>
                <td>{info.name}</td>
                <td>{info.cost}</td>
            </tr>
        </>
    )
}

export default CheckoutItem;