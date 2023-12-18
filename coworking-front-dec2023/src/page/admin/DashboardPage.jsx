import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useEffect } from "react";

const DashboardPage = () => {
    // Fonction permettant de rediriger l'utilisateur. Dans notre cas la redirection si réponse négative du token
  const navigate = useNavigate();

    // On fait un useEffect pour la vérification du token la première fois
  useEffect(() => {
    // Si présent on le met dans local storage
    const token = localStorage.getItem("jwt");
    // Si absent on redirige l'utilisater vers la page de login afin de sécuriser la page admin
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <>
      <HeaderAdmin />

      <h2>Vous êtes bien connecté en tant qu'admin</h2>
    </>
  );
};

export default DashboardPage;