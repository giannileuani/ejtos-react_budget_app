import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const setBudget = (value) => {
        dispatch ({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend">
                <label>Budget: {currency}</label>
            </div>
            <input
                required='required'
                type='number'
                id='cost'
                step="10"
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                 onChange={(event) => setBudget(event.target.value)}
                >
                </input>
        </div>
    );
};
export default Budget;
