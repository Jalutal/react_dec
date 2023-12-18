import React, { useEffect, useState } from "react";

const AdminCoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState(null);
    // Utilisation pour le premier rendu du compo
  useEffect(() => {
    (async () => {
      const coworkingsResponse = await fetch("http://localhost:3000/api/coworkings");
      const coworkingsResponseData = await coworkingsResponse.json();
      setCoworkings(coworkingsResponseData);
    })();
  }, []);

    // Toujours la variable en async à l'appui sur le bouton 
  const handleDeleteCoworking = async (event, coworkingId) => {
    const token = localStorage.getItem("jwt");
    // On récupère les informations relatives au token et on précise que la méthode doit être le DELETE. Cela oblige à avoir le token pour supprimer
    await fetch("http://localhost:3000/api/coworkings/" + coworkingId, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    // Permet de mettre à jour le composant suite à la suppression
    const coworkingsResponse = await fetch("http://localhost:3000/api/coworkings");
    const coworkingsResponseData = await coworkingsResponse.json();
    setCoworkings(coworkingsResponseData);
  };

  return (
    <>
      <h1>Liste des coworkings : </h1>

      {coworkings ? (
        <>
          {coworkings.map((coworking) => {
            return (
              <article>
                <h2>{coworking.name}</h2>
                <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Supprimer</button>
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default AdminCoworkingsPage;