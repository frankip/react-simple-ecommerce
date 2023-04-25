import { useState } from "react"; // Import the "useState" hook from the "react" library

import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

import { data } from "../data/items";  // Import the "data" array of items from the "../data/items" file
import NewEntryForm from "./NewEntryForm";

function AppContainer() {
    const [itemList, setItemList] = useState(data)


    return (
        <> {/* Use fragment syntax to wrap multiple elements */}
            <h2>App container</h2>
            <Navbar/>
            <NewEntryForm/>
            <Filter />
            <ProductList products={itemList}/> {/* Render the "ProductList" child component and pass down the "itemList" state as a prop */}
            <Footer />
        </>);// Close the fragment
}

export default AppContainer; // Export the "AppContainer" component as the default export