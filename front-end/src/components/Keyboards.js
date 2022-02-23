import { useEffect, useState } from "react";
import axios from "axios";
import Keyboard from "./Keyboard";

function Keyboards({ getCartItems }) {
    const [ keyboards, setKeyboards ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(()=> {
        axios.get(`${API}/keyboards`)
            .then((res) => {
                setKeyboards(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleAddToCart = (keyboard) => {
        // getCartItems(setCart([ ...cart, keyboard]));
        // getCartItems(cart);
        getCartItems(keyboard);
    }

    return(
        <div className="all-keyboards">
            <div className="typewriter">
                <h2>All Keyboards</h2>
            </div>
            <article>
                {keyboards.map((keyboard) => {
                    return <Keyboard key={keyboard.id} keyboard={keyboard} handleAddToCart={handleAddToCart} />
                })}
            </article>
        </div>
    )
}

export default Keyboards;