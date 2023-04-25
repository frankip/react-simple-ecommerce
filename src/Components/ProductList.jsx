
import ProductItem from "./ProductItem";



function ProductList({ products }) {
    return (
        <>
            <h2>ProductList</h2>

            {
                products.map((item)=>{
                    return <ProductItem key={item.id} product={item}/>

                })

            }
        </>);
}

export default ProductList;