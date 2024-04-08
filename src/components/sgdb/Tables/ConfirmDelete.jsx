import { Info } from "lucide-react";
import { useState } from "react";
import Tooltip from "@/components/Tooltip";

function ConfirmDelete({ onClose, dbName }) {
  const [dbNameConfirm, setDbNameConfirm] = useState("");
  console.log("DbNameConfirm: " + dbNameConfirm, "DbName" + dbName);
  const handleDeleteDatabase = () => {
    if (dbNameConfirm == "eliminar " + dbName.replace(".ldb", "")) {
      fetch(`http://localhost:5000/delete_database/${dbName}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filename: dbName }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Error al eliminar la base de datos");
        })
        .then((data) => {
          console.log(data);
          window.location.reload();
          onClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("No se ha confirmado la eliminación de la base de datos.");
    }
  };

  const handleCancel = () => {
    onClose(); // Esta función se llamará cuando el usuario haga clic en "Cancelar"
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-white bg-modalBg w-[35vw] px-4 py-4 h-[28vh] rounded-lg drop-shadow-xl mx-auto my-auto">
        <div className="flex">
          <img src="/logotipo.png" className="h-10 w-10" alt="" />
          <p className="my-auto ml-4 font-bold text-xl">
            Eliminar base de datos
          </p>
        </div>
        <label className="flex text-white/65 my-2">
          {`Confirma que quieres eliminar tu base de datos escribiendo “eliminar ${dbName.replace(
            ".ldb",
            ""
          )}”.`}
          <button>
            <Tooltip content="En el mundo real del programador, es común ver estas confirmaciones de eliminación, se usan para asegurar que no borres algo por accidente.">
              <Info className="ml-2 text-teal-600" />
            </Tooltip>
          </button>
        </label>
        <input
          onChange={(e) => setDbNameConfirm(e.target.value)}
          placeholder={`eliminar ${dbName.replace(".ldb", "")}`}
          className="w-full p-4 rounded-lg bg-modalInputBg border-modalBorder border mb-4 mt-2"
        />
        <div className="flex mt-3">
          <button
            className="bg-teal-600 py-4 px-5 rounded-md mr-4 hover:bg-teal-800 transition-colors"
            onClick={handleDeleteDatabase}
          >
            Confirmar
          </button>
          <button
            className="bg-modalButton hover:bg-modalButton/75 transition-colors py-4 px-5 rounded-md"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
