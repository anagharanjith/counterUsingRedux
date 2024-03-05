import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

function Counter() {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const handleValidAmount = () => {
        if (parseInt(amount) !== 0) {
            dispatch(incrementByAmount(parseInt(amount))); 
        } else {
            alert("Enter a valid amount");
        }
    };

    const count = useSelector(state => state.counterReducer.count);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex flex-column justify-content-center mt-5 align-items-center shadow rounded border" style={{ width: '500px' }}>
                        <h1 className='text-success mt-5'>Counter App</h1>
                        <h1 style={{ fontSize: '100px' }} className="text-white">{count}</h1>
                        <div className="d-flex justify-content-between">
                            <button onClick={() => dispatch(decrement())} className="btn btn-warning text-white me-5">Decrement</button>
                            <button onClick={() => dispatch(reset())} className="btn btn-danger text-white me-5">Reset</button>
                            <button onClick={() => dispatch(increment())} className="btn btn-primary text-white">Increment</button>
                        </div>
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <input onChange={e => setAmount(e.target.value)} type="text" className='w-100' placeholder="Increment Amount" />
                            <button onClick={handleValidAmount} className="btn btn-primary ms-3 w-100 ">Increment Amount By</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;
