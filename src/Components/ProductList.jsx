import { useState } from "react"; 
import ProductItem from "./ProductItem";

function ProductList({ products }) { // Define the "ProductList" component that receives a prop called "products"

    const [clicked, setClicked] = useState('') // Define a state variable called "clicked" using the useState hook, initially set to an empty string

    function handleClickedItem(item) { // Define a function called "handleClickedItem" that takes an item parameter
        console.log('soe', item);
        setClicked(item.description) // Set the "clicked" state to the item's description
    }

    return (
        <>
            <h2>ProductList</h2>
            <p className="header">{clicked}</p> {/* Render a paragraph element that displays the "clicked" state */}

            {
                products.map((item) => { // Map over the "products" array and render each item using the "ProductItem" component
                    return <ProductItem
                        key={item.id}
                        product={item}
                        term={clicked}
                        updateClicked={handleClickedItem} // Pass down the "clicked" state and "handleClickedItem" function as props to the "ProductItem" component
                    />

                })

            }
        </>); // Close the fragment
}

export default ProductList; // Export the "ProductList" component as the default export
