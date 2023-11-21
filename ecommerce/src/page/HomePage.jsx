import Header from "../component/Header";
import { pageTitle, productSortedByPrice, products } from "../utils/product-utils";
import Sidebar from "../component/Sidebar";
import ProductCard from "../component/ProductCard";

function Home() {
  

  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
      <Header pageTitle={"Home"}/>
      <Sidebar textToDisplay={pageTitle}/>
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return (
              <ProductCard product = {product}/>
            );
          })}
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <ProductCard product = {product}/>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
