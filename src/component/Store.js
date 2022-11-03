// Import Links & Hooks
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
// Import Firebase 
import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue} from 'firebase/database'


const Store = () => {

    // Create a state that stores Firebase data
    const [storeData, setStoreData] = useState([])

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

            // update state with the new array
            setStoreData(newArray)
        })
    }, [])

    

    return (
        <section className='wrapper'>
            <h2>Store</h2>
            <ul className='gallery'>

                {/* Map through storeData state variable and display each image */}
                {
                    storeData.map((storeItem) => {
                        return (
                            <li key={storeItem.id} className='galleryItem'>

                                {/* Make each image a link with a unique URL address */}
                                <Link to={`/item/${storeItem.id}`}>
                                    <img src={storeItem.value.image} alt={storeItem.value.description} />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Store;