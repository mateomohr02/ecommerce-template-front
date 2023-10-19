import React from "react";
import { Link } from "react-router-dom";

const OptionLogged = ({ handleLogout }) => {

  console.log(localStorage);
  return (
    <div>
      {/* {
        localStorage.getItem("")
      } */}

      <Link className="hover:text-gray-300" to="/profile">
        Mi Perfil
      </Link>
      <button className="hover:text-gray-300" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default OptionLogged;
