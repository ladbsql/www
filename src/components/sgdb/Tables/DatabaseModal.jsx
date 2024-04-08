import { useState } from "react";
import { Info } from "lucide-react";
import Tooltip from "@/components/Tooltip";
function DatabaseModal({ onClose, onDatabaseCreated }) {
  const [dbName, setDbName] = useState("");

  const handleCreateDatabase = () => {
    if (!dbName.trim()) {
      console.log("Ingresa un nombre para la base de datos.");
    }

    fetch("http://localhost:5000/create_database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: dbName }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error al crear la base de datos");
      })
      .then((data) => {
        console.log(data);
        onDatabaseCreated();
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^a-zA-Z0-9_]/g, "_");
    setDbName(formattedValue);
  };

  const handleCancel = () => {
    onClose(); // Esta función se llamará cuando el usuario haga clic en "Cancelar"
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-white bg-modalBg w-[35vw] px-4 py-4 h-[28vh] rounded-lg drop-shadow-xl mx-auto my-auto">
        <div className="flex">
          <img src="/logotipo.png" className="h-10 w-10" alt="" />
          <p className="my-auto ml-4 font-bold text-xl">Crear base de datos</p>
        </div>
        <label className="flex text-white/65 my-2">
          Nombre de la base de datos{" "}
          <button>
            <Tooltip content='Los nombres de bases de datos se escriben con la nomenclatura "Snake Case", quiere decir que un "Hola Mundo" se escribiria "Hola_Mundo" de esta forma evitas errores con los nombres de las bases de datos.'>
              <Info className="ml-2 text-teal-600" />
            </Tooltip>
          </button>{" "}
        </label>{" "}
        <input
          value={dbName}
          onChange={handleInputChange}
          placeholder="nombre_de_ejemplo"
          className="w-full p-4 rounded-lg bg-modalInputBg border-modalBorder border mb-4 mt-2"
        />
        <div className="flex mt-3">
          <button
            className="bg-teal-600 py-4 px-5 rounded-md mr-4 hover:bg-teal-800 transition-colors"
            onClick={handleCreateDatabase} // Cambio aquí
          >
            Crear Base de Datos
          </button>
          <button
            className="bg-modalButton hover:bg-modalButton/75 transition-colors py-4 px-5 rounded-md"
            onClick={handleCancel} // Cambio aquí
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatabaseModal;
