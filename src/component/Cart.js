// Import Links & Hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import Firebase 
import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database'

const Cart = (props) => {

    // Create a state that stores Firebase data
    const [cart, setCart] = useState([]);

    // Grab the firebase data once this components mounts onto the DOM
    useEffect(() => {
        // create variables that will reference and hold our database values
        const database = getDatabase(firebaseConfig);
        const cartRef = ref(database, `cart`);

        // grab firebase data everytime the information updates
        onValue(cartRef, (response) => {
            // create an array to store our data
            const newArray = [];
            const data = response.val()
            
            // loop through returned object and store in array
            for (let item in data) (
                newArray.push({key: item, value: data[item]})
            )

            // map through the array and count/remove duplicates
            const reduce = new Map(newArray.map(newItem => [newItem.value.description, { ...newItem, quantity: 0}]));
            for (const {value} of newArray) reduce.get(value.description).quantity++;
            const cartArray = Array.from(reduce.values());

            // update cart state
            setCart(cartArray)

            // grab setCartQuantity function from App.js via props
            props.setCartQuantity(newArray.length)
        })
    }, [cart])

    // create a remove function that removes an item from cart
    const handleRemoveButton = (cartItemId) => {
        const database = getDatabase(firebaseConfig);
        const cartItemRef = ref(database, `cart/${cartItemId}`)
        remove(cartItemRef)
    }

    return (
        <section>
            <Link to="/store">
                <h3>Back to Store</h3>
            </Link>
            <ul className='gallery'>
                {/* Map through cart state variable and display each image, description and price */}
                {
                    cart.map((cartItem) => {
                        return (
                            <li key={cartItem.key} className='cart'>
                                <div className='galleryItem'>
                                    <img src={cartItem.value.image} alt={cartItem.value.description} />
                                </div>
                                <p>{cartItem.value.description}</p>
                                <p>{cartItem.value.price}</p>
                                <p>Quantity: {cartItem.quantity}</p>
                                {/* create a remove event listener */}
                                <button onClick={() => (handleRemoveButton(cartItem.key))}>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Cart;




