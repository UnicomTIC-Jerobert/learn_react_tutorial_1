import "./Cart.css";

export const Cart = () => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
    }, [cart]);
    return (
        <div className="cart-container">
            <div className="cart-product">
                <div className="img">
                    <img src="" alt="image" />
                </div>
                <div className="details">
                    <h3>{name}</h3>
                    <p>Price Rs:{product.amt} </p>
                    {cart.includes(product) ? <button className="btnRemove">Remove from Cart</button> : <button>Add to Cart</button>}
                </div>
            </div>
        </div>
    );
};