import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {
    const { currency } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const setBudget = (value) => {
        dispatch ({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <select className="custom-select" id="currencySelect"
            // onChange={(event) => setName(event.target.value)}
            >
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="dollar">$ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default CurrencySelect;