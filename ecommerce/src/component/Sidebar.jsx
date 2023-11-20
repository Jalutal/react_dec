
import { Link } from 'react-router-dom'

function Sidebar ({currentPage}){
    return(
        <>
        <div className='sidebar'>   
            {currentPage =="HomePage" &&
                <p>LE TITRE DU SITE</p>                    
            }
            {currentPage =="ProductPage" && 
                <p>vous consulez le produit...</p>
            }
            {currentPage =="ProductsPage" &&
                <p>vous consultez La liste des produits</p>
            }
        </div>
        </>
    )
}

export default Sidebar
