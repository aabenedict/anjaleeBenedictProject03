Project Description: 
- Create a basic E-commerce Website that sells eyeglasses

MVP: 
- Create a firebase database with 6 different glasses options (each glasses object will have an image, price, and description)
- Have a website, that allows users to click on each glasses, and add them to cart, and then if you click on cart, it should show the list of glasses the user added to the cart

Stretch Goals: 
1. Add a wishlist option (which allows users to save a eyeglass to their wishlist)
2. Add a user login, so users can save their wishlists, and view them later by logging in

Pseudo Code: 

Components
1. App.js
    - pulls together all the other components (Header, Store, Item, Cart, and Footer)
    - useState to store the firebase data
    - have a useEffect function that retrieves the data from firebase(which is passed down as props to Store and Item)    

2. Header.js
    - contains nav, logo image, header image and h1

3. Store.js
    - contains 6 ul elements that are buttons 
    - when this component mounts, grab data from props and display them on the page
    - contain a useState that tracks whether the ul was clicked on, and if it is selected, display that corresponding Item component
        - const [ displayResults, setDisplayResults ] = useState(false)
            - setDisplayResults onClick for ul button 
                    - if true, show Item component
                - contains description, image, and name of eyeglass
                - pass down data to Item component as props 

4. Item.js
    - const [ showItem, setShowItem] = useState(false)
        - if true, add css class to display: block
        - if false, have css class on it, so it's display: none
    - have useState that tracks whether the "buy" button is selected, and if so, pass data to Cart. js


5. Footer
    - contains Made @ Juno College 


Example Object in Firebase 

const eyeglasses = {
  "glasses01": {
    description: "blue glasses with metal frame",
    price: "$40.00",
    image: "https://tinyurl.com/3shcde77"
  },
  "glasses02": {
    description: "red glasses with plastic frame",
    price: "$29.00",
    image: "https://tinyurl.com/3tbxcj7d"
  }
}