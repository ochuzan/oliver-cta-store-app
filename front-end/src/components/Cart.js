function Cart({ cart }) {
    const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

    let cartItems = cart.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })

    let subTotal;
    if(cart.length > 0){
        subTotal = cart.reduce((sum, { price }) => {
            return sum + Number(price);
        }, 0)
    } else {
        subTotal = 0
    }
    return(
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems}
            </ul>

            <h3>Subtotal: {formatPrice(subTotal)} </h3>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Check Out</button>
        </div>
    )
}

export default Cart;