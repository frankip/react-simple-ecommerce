import { data } from "../data/items";
import ProductItem from "./ProductItem";



function ProductList() {
    return (
        <>
            <h2>ProductList</h2>

            {
                data.map((item)=>{
                    return <ProductItem />

                })

            }
        </>);
}

export default ProductList;