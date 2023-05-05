import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import HeaderWithCart from '../OrderPizza/HeaderWithCart/HeaderWithCart';
import Swal from 'sweetalert2';

function CustomerInformationPage() {

    const history = useHistory();

    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setzipInput] = useState('');
    const [pickupOption, setPickupOption] = useState('')

    const [requiredName, setRequiredName] = useState(false);
    const [requiredAddress, setRequiredAddress] = useState(false);
    const [requiredCity, setRequiredCity] = useState(false);
    const [requiredZip, setRequiredZip] = useState(false);
    const [requiredType, setRequiredType] = useState(false);

    const dispatch = useDispatch();

    const newCustomer = () => {
        if (nameInput !== '' && addressInput !== '' && cityInput !== '' && zipInput !== '' && pickupOption !== '') {
            const currentCustomer = {
                customer_name: nameInput,
                street_address: addressInput,
                city: cityInput,
                zip: zipInput,
                type: pickupOption
            }
            dispatch({
                type: 'NEW_CUSTOMER_INFORMATON',
                payload: currentCustomer
            })
            history.push("/checkout")
        }
        else {
            Swal.fire({
                icon: 'error',
                text: 'Please fill out the required fields'
            })
            requiredFields();
        }
    }

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
    const required = (param) => {
        // if the parameter pass in is true
        if (param) {
          // return the css className that
          //  will show this input is required
          console.log(`set ${param} className to "red-background"`);
            return 'red-background'
        }
        // Else, no className needed.
        else {
            return ''
        }
      } // End required

    const requiredFields = () => {
        if (nameInput === '') {
            setRequiredName(true);
            console.log('set requiredName true');
        }
        if (addressInput === '') {
            setRequiredAddress(true);
        }
        if (cityInput === '') {
            setRequiredCity(true);
        }
        if (zipInput === '') {
            setRequiredZip(true);
        }
        if (pickupOption === '') {
            setRequiredType(true);
        }
    }


    return (
        <>
        <HeaderWithCart />
            <h3>Step 2: Customer Information</h3>
            <form>
                <input
                    placeholder='Name'
                    type='text'
                    value={nameInput}
                    onChange={handleSetNameInput}
                    className={required(requiredName)}
                />
                <input
                    placeholder='Address'
                    type='text'
                    value={addressInput}
                    onChange={handleAddressInput}
                    className={required(requiredAddress)}
                />
                <input
                    placeholder='City'
                    type='text'
                    value={cityInput}
                    onChange={handleCityInput}
                    className={required(requiredCity)}
                />
                <input
                    placeholder='Zip'
                    type='text'
                    value={zipInput}
                    onChange={handleZipInput}
                    className={required(requiredZip)}
                />
                <div className={required(requiredType)}>
                    <h4>Choose One:</h4>
                    <label for="Pickup">Pickup</label>
                    <input
                        type='radio'
                        value='Pickup'
                        name='getPizza'
                        onChange={handleRadio}
                    />
                    <label for="Delivery">Delivery</label>
                    <input
                        type='radio'
                        value='Delivery'
                        name='getPizza'
                        onChange={handleRadio}
                    />
                </div>
            </form>
            <footer className="footer-button">
                <button className="next-button" onClick={newCustomer}>next</button>
            </footer>
        </>
    )

}

export default CustomerInformationPage;