import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function CustomerInformationPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const checkoutPage = () => {
        history.push("/checkout")
    }

    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setzipInput] = useState('');
    const [pickupOption, setPickupOption] = useState('')

    const newCustomer = (event) => {
        event.preventDefault();

        dispatch({
            type: 'NEW_CUSTOMER_INFORMATION',
            payload: {
                customer_name: nameInput,
                street_address: addressInput,
                city: cityInput,
                zip: zipInput,
                type: pickupOption
            }
        })
    };

    const handleSetNameInput = event => {
        setNameInput(event.target.value);
    };
    const handleAddressInput = event => {
        setAddressInput(event.target.value);
    };
    const handleCityInput = event => {
        setCityInput(event.target.value);
    };
    const handleZipInput = event => {
        setzipInput(event.target.value);
    };
    const handleRadio = event => (
        setPickupOption(event.target.value)
    )

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <form onSubmit={newCustomer}>
                <input
                    placeholder='Name'
                    type='text'
                    value={nameInput}
                    onChange={handleSetNameInput}
                />
                <input
                    placeholder='Address'
                    type='text'
                    value={addressInput}
                    onChange={handleAddressInput}
                />
                <input
                    placeholder='City'
                    type='text'
                    value={cityInput}
                    onChange={handleCityInput}
                />
                <input
                    placeholder='Zip'
                    type='text'
                    value={zipInput}
                    onChange={handleZipInput}
                />Pickup
                <input
                    type='radio'
                    value='Pickup'
                    name='getPizza'
                    onChange={handleRadio}
                />Delivery
                <input
                    type='radio'
                    value='Delivery'
                    name='getPizza'
                    onChange={handleRadio}
                />
            </form>
            <footer className="footer-button">
                <button className="next-button" onClick={checkoutPage} >next</button>
            </footer>
        </>
    )

}

export default CustomerInformationPage;