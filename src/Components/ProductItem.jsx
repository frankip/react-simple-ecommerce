function ProductItem({product, updateClicked}) {//  component receives two props: "product" and "updateClicked"
    return (
        <>
            <h2>ProductItem {product.id}</h2>
            <p onClick={()=>updateClicked(product)}>{product.description}</p> {/* Render a p element that displays the "description" property of the "product" prop, and adds an "onClick" event handler that calls the "updateClicked" function and passes the "product" prop as an argument */}
        </>);
}

export default ProductItem;