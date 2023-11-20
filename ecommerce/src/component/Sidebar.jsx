
import { Link } from 'react-router-dom'

function Sidebar ({currentPage, text}){
    return(
        <>
        <div className='sidebar'>   
            {currentPage =="HomePage" &&
                <p>LE TITRE DU SITE</p>                    
            }
            {currentPage =="ProductPage" && 
                <p>{`Vous consultez le produit ${text}`}</p>
            }
            {currentPage =="ProductsPage" &&
                <p>vous consultez La liste des produits</p>
            }
        </div>
        </>
    )
}

export default Sidebar
