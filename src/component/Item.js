// Import Links & Hooks
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Import Firebase
import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, push } from 'firebase/database'



const Item = () => {
    // Create a useParams variable
    const itemIdParam = useParams();

    // Create a state that stores firebase data
    const [item, setItem] = useState([])

    // Grab the firebase data once this components mounts onto the DOM
    useEffect(() => {
        // create variables that will reference and hold our database values
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);

        // grab firebase data everytime the information updates
        onValue(databaseRef, (response) => {
            // create an array to store our data
            const newArray = [];
            const data = response.val().inventory

            // loop through returned object and store in array
            for (let item in data) {
                newArray.push({ id: item, value: data[item] })
            }

            // fiter array by id to only display selected item
            const itemList = newArray.filter((item) => {
                return item.id === itemIdParam.itemId
            })

            // update state with the new array
            setItem(itemList[0].value)
        })
    }, [itemIdParam.itemId])
    
    // Create the handleClick function for buy button
    const handleBuyButton = () => {
        // create variables that will reference and hold our 'CART' database values
        const database = getDatabase(firebaseConfig);
        const cartRef = ref(database, `cart`);

        // create an object that you want to upload to database
        const newItem = {
            image: item.image,
            description: item.description,
            price: item.price
        };
        // push object to 'CART node' in database
        push(cartRef, newItem)
    }

    return (
        <section className='item'>
            <Link to="/store">
                <h3>Back to Store</h3>
            </Link>

            {/* Display selected item on page */}
            <div className='itemFlex'>
                <div className="itemImg">
                    <img src={item.image} alt={item.description} />
                </div>
                <p>{item.description}</p>
                <p>{item.price}</p>
                
                {/* Create an add to cart button */}
                <button onClick={handleBuyButton}>Add to Cart</button>
            </div>
        </section>
    )
}

export default Item;