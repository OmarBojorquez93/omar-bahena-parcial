import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: ""
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (
      contacto.nombre.trim().length >= 3 &&
      contacto.apellidos.trim().length >= 3 &&
      regexEmail.test(contacto.email) && 
      regexPass.test(contacto.password)
    ) {
        setError(false);
        setMostrar(true);
    } else {
        setError(true);
    };
  };

  console.log(contacto);

  return (
    <div>
        {mostrar ? (
            <Card nombre={contacto.nombre} apellidos={contacto.apellidos} 
            email={contacto.email} password={contacto.password} />
        ) : (
            <form onSubmit={handleSubmit}>
            <label>Nombre(s): </label>
            <input
                type="text"
                onChange={(event) =>
                setContacto({ ...contacto, nombre: event.target.value })
                }
            />
            <label>Apellido(s): </label>
            <input
                type="text"
                onChange={(event) =>
                setContacto({ ...contacto, apellidos: event.target.value })
                }
            />
            <label>Email: </label>
            <input
                type="email"
                onChange={(event) =>
                setContacto({ ...contacto, email: event.target.value })
                }
            />
            <label>Contraseña: </label>
            <input
                type="password" required minLength="6"
                onChange={(event) =>
                setContacto({ ...contacto, password: event.target.value })
                }
            />
            <button>Enviar solicitud</button>
            {error && (
                <div>
                    <h4 style={{ color: "red" }}>
                    Por favor chequea que la información sea correcta
                    </h4>
                    <h5 style={{ color: "green" }}>
                    Contraseña mínima de 6 caracteres y al menos 1 minúsucula, 1 mayúscula y 1 número
                    </h5>
                </div>
            )}
            </form>
        )}
    </div>
  );
};

export default Form;