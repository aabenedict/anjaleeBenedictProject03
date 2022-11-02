import firebaseConfig from './firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // create a variable that will hold onto our database values
        const database = getDatabase(firebaseConfig);
        // create a variable that will reference our database
        const cartRef = ref(database, `cart`);
        onValue(cartRef, (response) => {
            const data = response.val()
            console.log(data)
            const newArray = [];
            for (let item in data) (
                newArray.push({key: item, value: data[item]})
            )
            console.log(newArray)

            const reduce = new Map(newArray.map(newItem => [newItem.value.description, { ...newItem, quantity: 0}]));
            for (const {value} of newArray) reduce.get(value.description).quantity++;
            const cartArray = Array.from(reduce.values());
            console.log(cartArray)
            setCart(cartArray)
        })
    }, [])

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
            <ul className='cart'>
                {
                    cart.map((cartItem) => {
                        return (
                            <li key={cartItem.key} className='galleryItem'>
                                <img src={cartItem.value.image} alt={cartItem.value.description} />
                                <p>{cartItem.value.description}</p>
                                <p>{cartItem.value.price}</p>
                                <p>Quantity: {cartItem.quantity}</p>
                                <button onClick={() => (handleRemoveButton(cartItem.key))}>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>

            // {/* <img src={props.cartData.image} alt={props.cartData.description} />
            // <p>{props.cartData.description}</p>
            // <p>{props.cartData.price}</p> */}
    )
}

export default Cart;




// let cartArray = [];
// let key = "description";
// newArray.forEach((newItem) => {
//     if(cartArray.some((value) => {return value[key] == newItem[key]})) {
//         cartArray.forEach((cartItem) => {
//             if(cartItem[key] === newItem[key]) {
//                 cartItem["quantity"]++
//             }
//         })
//     } else {
//         let a = {}
//         a[key] = newItem[key]
//         a['quantity'] = 1
//         cartArray.push(a);
//     }
// })
// console.log(cartArray)

// const countedItems = () => {
//     newArray.reduce((allItems, item) => {
//         const quantity = allItems[item] ?? 0;
//         return {
//             ...allItems,
//             [item]: quantity + 1
//         }
//     })
// }
// console.log(countedItems())


// const names = [{ _id: 1 }, { _id: 1 }, { _id: 2 }, { _id: 1 }];

// const mp = new Map(names.map(o => [o._id, { ...o, count: 0 }]));
// for (const { _id } of names) mp.get(_id).count++;
// const result = Array.from(mp.values());

// console.log(result);