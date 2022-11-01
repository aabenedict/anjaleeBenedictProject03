import { useState } from 'react';

const Cart = (props) => {

const [cart, setCart] = useState(props.cartData)

    return (
        <>
            <img src={props.cartData.image} alt={props.cartData.description} />
            <p>{props.cartData.description}</p>
            <p>{props.cartData.price}</p>
        </>
    )
}

export default Cart;