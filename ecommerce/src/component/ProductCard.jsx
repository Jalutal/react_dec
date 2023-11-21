import { Link } from "react-router-dom";

function ProductCard({product}) {
    return (
        <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
    )
}

export default ProductCard;