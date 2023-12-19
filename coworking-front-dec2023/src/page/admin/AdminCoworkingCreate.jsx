import { useState } from "react";

const AdminCoworkingCreate = () => {

    const [message, setMessage] = useState(null);


    // On récupère les entrées du formulaire.
    // Ces valeurs sont comparées à celles de notre base de données
    const handleCreateCoworking = async (event) => {        
        event.preventDefault();       
        const name = event.target.name.value;
        const priceByMonth = event.target.priceByMonth.value;
        const priceByDay = event.target.priceByDay.value;
        const priceByHour = event.target.priceByHour.value;
        const addressNumber = event.target.addressNumber.value;
        const addressStreet = event.target.addressStreet.value;
        const addressCity = event.target.addressCity.value;
        const addressPostcode = event.target.addressPostcode.value;
        const superficy = event.target.superficy.value;
        const capacity = event.target.capacity.value;


        // Création de l'objet pour stocker les données
        const coworkingToCreate = {
            name: name,
            price: {
              month: priceByMonth,
              day: priceByDay,
              hour: priceByHour,
            },
            address: {
              number: addressNumber,
              street: addressStreet,
              city: addressCity,
              postCode: addressPostcode,
            },
            superficy: superficy,
            capacity: capacity,
          };
              

          // Comme à chaque fois, conversion en Json et récupération du token pour vérification
        const coworkingToCreateJson = JSON.stringify(coworkingToCreate);
        const token = localStorage.getItem("jwt");

        const createCoworkingResponse = await fetch("http://localhost:3000/api/coworkings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: coworkingToCreateJson,
          });
          //Messages succès / erreur
          if (createCoworkingResponse.status === 201) {
            setMessage("Coworking créé avec succès !");
          } else {
            setMessage("Erreur, t'es un boulet !");
          }
        };




    return(
        // Formulaire pour créer le coworking
        <>
        {message && <p>{message}</p>}
        <form onSubmit={handleCreateCoworking}>
          <div>
            <label>
              Nom
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Prix par mois
              <input type="number" name="priceByMonth" />
            </label>
          </div>
          <div>
            <label>
              Prix par jour
              <input type="number" name="priceByDay" />
            </label>
          </div>
          <div>
            <label>
              Prix par heure
              <input type="number" name="priceByHour" />
            </label>
          </div>
          <div>
            <label>
              Adresse : Numéro
              <input type="text" name="addressNumber" />
            </label>
          </div>
          <div>
            <label>
              Adresse : Rue
              <input type="text" name="addressStreet" />
            </label>
          </div>
          <div>
            <label>
              Adresse : Ville
              <input type="text" name="addressCity" />
            </label>
          </div>
          <div>
            <label>
              Adresse : Postcode
              <input type="text" name="addressPostcode" />
            </label>
          </div>
          <div>
            <label>
              Superficie
              <input type="number" name="superficy" />
            </label>
          </div>
          <div>
            <label>
              Capacité
              <input type="number" name="capacity" />
            </label>
          </div>
  
          <input type="submit" />
        </form>
      </>
    );
  };
  
  

export default AdminCoworkingCreate;