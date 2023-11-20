// On appelle la fonction useparams pour récupérer et stocker la variable ID de notre tableau

import { useParams } from "react-router-dom";
import Header from "../component/Header";

function ProductPage() {

  // le stockage se fait à cet endroit
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "micro-onde",
      publicationDate: "2021-09-01",
      price: 100,
      description: "chauffe les aliments",
      category: "cuisine",
    },
    {
      id: 2,
      title: "four",
      publicationDate: "2021-10-01",
      price: 150,
      description: "chauffe les aliments",
      category: "cuisine",
    },
    {
      id: 3,
      title: "lave-linge",
      publicationDate: "2021-11-01",
      price: 400,
      description: "lave les linges",
      category: "salle de bain",
    },
    {
      id: 4,
      title: "lave-vaisselle",
      publicationDate: "2021-08-01",
      price: 200,
      description: "lave les vaisselles",
      category: "salle de bain",
    },
    {
      id: 5,
      title: "aspirateur",
      publicationDate: "2022-02-01",
      price: 720,
      description: "aspire les poussières",
      category: "salle de bain",
    },
    {
      id: 6,
      title: "cuisinière",
      publicationDate: "2022-12-01",
      price: 350,
      description: "cuit les aliments",
      category: "cuisine",
    },
    {
      id: 7,
      title: "réfrigérateur",
      publicationDate: "2022-03-01",
      price: 600,
      description: "refroidit les aliments",
      category: "cuisine",
    },
    {
      id: 8,
      title: "congélateur",
      publicationDate: "2022-04-01",
      price: 450,
      description: "congèle les aliments",
      category: "cuisine",
    },
    {
      id: 9,
      title: "télévision",
      publicationDate: "2022-10-10",
      price: 700,
      description: "affiche des images",
      category: "salon",
    },
    {
      id: 10,
      title: "ordinateur",
      publicationDate: "2022-06-01",
      price: 1000,
      description: "affiche des images",
      category: "salon",
    },
  ];

  // permet de convertir le type de id (chaine de caractères)
  // car récupérée dans l'url
  // vers un integer
  // il vaut mieux faire la conversion soit même
  // et comparer avec triple égal (strict)
  // plutôt que laisser JS faire la conversion et comparer avec double égal
  const idInt = parseInt(id);
// Si le produit trouvé dans l'url correspond à une id du tableau, il charge alors les informations dans productFound
  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <>
      <Header />
      <main>
        //On récupère les informations nécessaire à l'affichage
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
