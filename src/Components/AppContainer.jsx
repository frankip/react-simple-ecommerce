import { useEffect, useState } from "react"; // Import the "useState" hook from the "react" library

import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

import { data } from "../data/items";  // Import the "data" array of items from the "../data/items" file
import NewEntryForm from "./NewEntryForm";

function AppContainer() {
    const [itemList, setItemList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const baseUrl= ` http://localhost:8081/transactions`

    useEffect(()=>{
        fetch(baseUrl)
        .then(res => res.json())
        .then(data=> setItemList(data))

        console.log('--', data);
    }, []);

    // Define a callback function to handle the submission of new items
    function handleUpdateItemList(newItem){
        console.log('{ formData}', newItem);

        // Make a POST request to the server with the new item data
        fetch(baseUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
        
            // Update the "itemList" state with the new item
          setItemList([...itemList, newItem]); 
    }

    const itemsToDisplay = itemList.filter((item) => {
        console.log('serc', item);
        if (searchTerm) return item.description.toLowerCase().includes(searchTerm)
        return itemList;
      });

    function handleSearchChange(event) {
        setSearchTerm(event.target.value)
      }



    return (
        <> {/* Use fragment syntax to wrap multiple elements */}
            <h2>App container</h2>
            <Navbar />
            <NewEntryForm handleUpdateItemList={handleUpdateItemList}/>
            <Filter onSearchChange={handleSearchChange} searchTerm={searchTerm}/>
            <ProductList products={itemsToDisplay}/> {/* pass down the "itemList" state as a prop */}
            <Footer />
        </>);// Close the fragment
}

export default AppContainer; // Export the "AppContainer" component as the default export