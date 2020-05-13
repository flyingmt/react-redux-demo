import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux'; 

function IceCreamContainer(props) {
    const numOfIcecream = useSelector(state => state.icecream.numOfIceCream);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of icecreams - {numOfIcecream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    )
};

export default IceCreamContainer;