// Config details
import firebaseConfig from './firebase';
// NPM Modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue} from 'firebase/database'
// Import Components
import Item from "./Item";

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
                newArray.push({ key: item, name: data[item] })
            }
            // updating state with the new array!
            console.log(newArray)
            setStoreData(newArray)
        })
    }, [])

    

    return (
        <>
            <h2>Store is Here</h2>
            <ul>
                {
                    storeData.map((storeItem) => {
                        return <Item key={storeItem.key} storeData={storeItem.name} />
                    })
                }
            </ul>
        </>
    )
}

export default Store;