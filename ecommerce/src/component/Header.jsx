import { Link } from "react-router-dom";

function Header({ pageTitle }) {
  return (
    <header>
      <img
        src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
        alt="electro menager"
      />
// Ici le nom de la page est en composant de la fonction Header. Cela permet de garder la même structure et de modifier uniquement le titre
// dans les pages .jsx
      <p>{pageTitle}</p>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
