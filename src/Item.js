import { useState } from 'react';
import Cart from './Cart';

const Item = (props) => {
    // Create a state for the item buttons
    const [itemButton, setItemButton] = useState(false)
    const [buyButton, setBuyButton] = useState(false)

    // Create the handleClick function for each item
    const handleItemClick = () => {
        setItemButton(!itemButton)
    }
    // Create the handleClick function for buy button
    const handleButtonClick = () => {
        setBuyButton(!buyButton)
    }
    console.log(props.key);

    return (
        <>
            <li>
                {/* <img src={props.storeData.image} alt={props.storeData.description} />
            <p>{props.storeData.description}</p>
            <p>{props.storeData.price}</p>
            <button>Buy</button> */}

                <button onClick={handleItemClick}>
                    <img src={props.storeData.image} alt={props.storeData.description} />
                </button>
            </li>
            {
                itemButton
                    ? <div>
                        <img src={props.storeData.image} alt={props.storeData.description} />
                        <p>{props.storeData.description}</p>
                        <p>{props.storeData.price}</p>
                        <button onClick={handleButtonClick}>Buy</button>
                    </div>
                    : null
            }

            {
                buyButton
                    ? <Cart cartData={props.storeData} />
                    : null
            }
        </>
    )
}

export default Item;