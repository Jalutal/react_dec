// On appelle la fonction useparams pour récupérer et stocker la variable ID de notre tableau

import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/products-utils";


function ProductPage() {


  const { id } = useParams();

  const idInt = parseInt(id);

  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <>
      <Header />
      <main>
        
        {productFound ? (
          <article>
            <h1>Detail du produit</h1>
            <p>{productFound.title}</p>
            <p>{productFound.price}</p>
            <p>{productFound.description}</p>
            <p>{productFound.category}</p>
          </article>
        ) : (
          //On gère l'erreur 404
          <p>Tu fais n'importe quoi Niels</p>
        )}
      </main>
    </>
  );
}

export default ProductPage;
