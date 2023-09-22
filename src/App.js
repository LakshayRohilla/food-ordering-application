import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <div>
            <Header onShowCart={showCartHandler}/>
            <Meals/>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
        </div>
    );
}

export default App;
