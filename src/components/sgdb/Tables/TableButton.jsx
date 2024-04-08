"use client";
import { useEffect, useState } from "react";
import { Database, ChevronDown, ChevronUp, Trash, Table } from "lucide-react";

function TableButton({ children, dbName, onOpenConfirm, onDbSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tables, setTables] = useState([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen && dbName) {
      fetch(`http://localhost:5000/${dbName}/list_tables`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTables(data.tables);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [isMenuOpen, dbName]);

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between bg-panelButtons hover:bg-panelButtons/70 transition-colors rounded-md w-full py-4 px-2 mb-4">
        {/* Boton de base de datos, al dar click se debe renderizar en Tables la base de datos que corresponda.*/}
        <button
          className="text-white/75 flex my-auto hover:underline"
          onClick={() => onDbSelect(dbName)}
        >
          <Database className="mr-2 ml-2 text-white/75" />{" "}
          {children.replace(".ldb", "")}
        </button>
        <div className="flex my-auto">
          <button onClick={() => onOpenConfirm(dbName)}>
            <Trash className="h-auto w-auto p-1 bg-miniButtons rounded-md ml-2 text-white/60 hover:bg-rose-500 transition-colors" />
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <ChevronUp className="h-auto w-auto p-1 bg-miniButtons rounded-md ml-2 text-white/60 hover:bg-teal-700 transition-colors" />
            ) : (
              <ChevronDown className="h-auto w-auto p-1 bg-miniButtons rounded-md ml-2 text-white/60 hover:bg-teal-700 transition-colors" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`origin-top transition-max-height duration-500 ease-in-out overflow-hidden flex w-full ${
          isMenuOpen ? "max-h-56" : "max-h-0"
        }`}
      >
        <ul className="bg-panelButtons rounded-md py-2 text-white/60 w-full mb-4">
          {tables.map((table, index) => (
            <li
              className="px-4 py-2 hover:bg-panelButtons/70 flex transition-colors w-full hover:text-white hover:cursor-pointer"
              key={index}
            >
              <button className="flex">
                <Table className="mr-2 text-emerald-500" /> {table}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableButton;
