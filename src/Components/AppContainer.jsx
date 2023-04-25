import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

import { data } from "../data/items";

function AppContainer() {


    return (
        <>
            <h2>App container</h2>
            <Navbar/>
            <Filter />
            <ProductList products={data}/>
            <Footer />
        </>);
}

export default AppContainer;