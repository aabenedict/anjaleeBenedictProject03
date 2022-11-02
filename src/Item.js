import firebaseConfig from './firebase';
import { getDatabase, ref, onValue, push } from 'firebase/database'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Item = () => {
    const itemIdParam = useParams();
    // Create a state to store firebase data
    const [item, setItem] = useState([])
    // Create a useEffect to retrieve firebase data
    useEffect(() => {
        // create a variable that will hold onto our database values
        const database = getDatabase(firebaseConfig);
        // create a variable that will reference our database
        const databaseRef = ref(database);
        onValue(databaseRef, (response) => {
            const newArray = [];
            const data = response.val().inventory
            for (let item in data) {
                newArray.push({ id: item, value: data[item] })
            }
            const itemList = newArray.filter((item) => {
                return item.id === itemIdParam.itemId
            })
            setItem(itemList[0].value)
        })
    }, [itemIdParam.itemId])
    
    // Create the handleClick function for buy button
    const handleBuyButton = () => {
        const database = getDatabase(firebaseConfig);
        const cartRef = ref(database, `cart`);
        const newItem = {
            image: item.image,
            description: item.description,
            price: item.price
        };
        push(cartRef, newItem)
    }

    return (
        <section className='item'>
            <Link to="/store">
                <h3>Back to Store</h3>
            </Link>
            <div className='itemFlex'>
                <img src={item.image} alt={item.description} />
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={handleBuyButton}>Add to Cart</button>
            </div>
        </section>
    )
}

export default Item;