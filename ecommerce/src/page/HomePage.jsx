import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice, products } from "../utils/products-utils";
import Sidebar from "../component/Sidebar";

function Home() {
  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <> {/*//Le pageTitle du header contient un nom différent des autres pages. C'est lui qui sera affiché à chaque chargement. */}
      <Header pageTitle="HomePage" />
      <main>      
      <Sidebar currentPage={"HomePage"}/>         
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>        
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
