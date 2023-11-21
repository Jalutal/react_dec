import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/product-utils";
import Sidebar from "../component/Sidebar";

function ProductPage() {
  const { id } = useParams();

  const idInt = parseInt(id);

  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <>
      <Header pageTitle={"Produit"}/>
      <Sidebar textToDisplay={"Vous consultez le produit " + String(productFound.title)}/>
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