const LoginPage = () => {
    // Async sur le event du fait de l'interrogation de l'API. Pas besoin de l'auto-appeler car elle se déclenche sur le Submit.
    const handleLogin = async (event) => {
        //On évite le rechargement de la page
      event.preventDefault();
        // Récup en variables des valeurs de username et pwd
      const username = event.target.username.value;
      const password = event.target.password.value;
  
        // Création d'un objet qui stock la réponse
      const loginData = {
        username,
        password,
      };
      
      const loginDataJson = JSON.stringify(loginData);

        // On fait une requête fetch pour vérifier si le user est présent dans la base de données
      const loginResponse = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginDataJson,
      });
      // On convertit la réponse et on récupère le token, que l'on affiche en console.log
      const loginResponseData = await loginResponse.json();
      const token = loginResponseData.data;
  
      console.log(token);
  
      // si l'api valide => jwt dans la réponse
      // sinon => erreur dans la réponse
    };
  
    return (
      <section>
        <form onSubmit={handleLogin}>
          <label>
            username
            <input type="text" name="username" />
          </label>
          <label>
            password
            <input type="password" name="password" />
          </label>
          <input type="submit" />
        </form>
      </section>
    );
  };
  
  export default LoginPage;