import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function AppContainer() {
    return (
        <>
            <h2>App container</h2>
            <Navbar/>
            <Filter />
            <ProductList />
            <Footer />
        </>);
}

export default AppContainer;