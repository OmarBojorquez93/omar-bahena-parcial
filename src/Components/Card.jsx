import React from "react";

const Card = ({ nombre, apellidos, email, password }) => {
    return (
        <div>
            <h2>El registro fue exitoso con los siguientes datos: </h2>
            <h3>Nombre(s): {nombre}</h3>
            <h3>Apellido(s): {apellidos}</h3>
            <h3>Correo electrónico: {email}</h3>
            <h3>Contraseña: {password}</h3>
        </div>);
};

export default Card;