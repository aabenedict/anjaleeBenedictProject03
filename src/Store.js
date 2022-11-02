// Config details
import firebaseConfig from './firebase';
// NPM Modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue} from 'firebase/database'
// import Link from react router
import { Link } from "react-router-dom";


const Store = () => {
    console.log("Store has rendered")

    // Initialize a state that stores Firebase data
    const [storeData, setStoreData] = useState([])
    

    // Grab the firebase data once this components mounts onto the DOM
    useEffect(() => {
       // create a variable that will hold onto our database values
       const database = getDatabase(firebaseConfig);
       // create a variable that will reference our database
       const databaseRef = ref(database);
       onValue(databaseRef, (response) => {
            // create an array to store our data
            const newArray = [];
            // storing the retured data as variable
            const data = response.val().inventory
            // loop through the returned object
            for (let item in data) {
                newArray.push({ id: item, value: data[item] })
            }
            // updating state with the new array
            console.log(newArray)
            setStoreData(newArray)
        })
    }, [])

    

    return (
        <>
            <h2>Store</h2>
            <ul className='gallery'>
                {
                    storeData.map((storeItem) => {
                        return (
                            <li key={storeItem.id} className='galleryItem'>
                                <Link to={`/item/${storeItem.id}`}>
                                    <img src={storeItem.value.image} alt={storeItem.value.description} />
                                </Link>
                            </li>
                        ) 
                    })
                }
            </ul>
        </>
    )
}

export default Store;