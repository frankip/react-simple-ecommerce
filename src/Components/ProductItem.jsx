function ProductItem({ product, updateClicked }) {//  component receives two props: "product" and "updateClicked"
    return (
        <>
            <h2></h2>
            {/* <p onClick={() => updateClicked(product)}>{product.description}</p>  */}
            {/* Render a p element that displays the "description" 
            and adds an "onClick" event handler that calls the "updateClicked" function and passes the "product" prop as an argument */}
            <img src="https://via.placeholder.com/300x200" alt="Card Image" onClick={() => updateClicked(product)}/>
            <h2>ProductItem {product.id}</h2>
            <p>{product.description}}</p>
            <p class="amount">${product.amount}</p>
        </>);
}

export default ProductItem;