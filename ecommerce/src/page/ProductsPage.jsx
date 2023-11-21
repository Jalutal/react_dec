import Header from "../component/Header";
import { productSortedByPrice } from "../utils/product-utils";
import Sidebar from "../component/Sidebar";
import ProductCard from "../component/ProductCard";

function ProductsPage() {
  return (
    <>
      <Header pageTitle={"Tous les produits"} />
      <Sidebar textToDisplay={"Vous consultez la liste des produits"}/>
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((currentProductInLoop) => {
          return (
           <ProductCard product = {currentProductInLoop}/>
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;