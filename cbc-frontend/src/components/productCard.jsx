export default function ProductCard(props){
    console.log(props);
    
    return (
        <div className="product-card">
            <img src={props.src} alt={props.name} />
            <h2>{props.name}</h2>
            <h2 className="price">{props.price}</h2>
            <button>Add to Cart</button>
        </div>
    )
}