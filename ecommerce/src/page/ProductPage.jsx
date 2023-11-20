import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/products-utils";

function ProductPage() {
  const { id } = useParams();

  // permet de convertir le type de id (chaine de caractères)
  // car récupérée dans l'url
  // vers un integer
  // il vaut mieux faire la conversion soit même
  // et comparer avec triple égal (strict)
  // plutôt que laisser JS faire la conversion et comparer avec double égal
  const idInt = parseInt(id);

  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <> //Le pageTitle du header contient un nom différent des autres pages. C'est lui qui sera affiché à chaque chargement.
      <Header pageTitle="Page produit" />
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
          <p>Tu fais n'importe quoi Niels</p>
        )}
      </main>
    </>
  );
}

export default ProductPage;
