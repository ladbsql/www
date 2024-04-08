"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Panel from "@/components/Panel";
import TablesRender from "@/components/sgdb/Tables";
import DatabaseModal from "@/components/sgdb/Tables/DatabaseModal";
import ConfirmDelete from "@/components/sgdb/Tables/ConfirmDelete";

export default function sgdb() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedDbName, setSelectedDbName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [databases, setDatabases] = useState([]);

  const [selectedDb, setSelectedDb] = useState(null);
  console.log(selectedDb);
  const [tablesData, setTablesData] = useState([]);

  useEffect(() => {
    fetchDatabases();
  }, []);
  const fetchDatabases = () => {
    fetch("http://localhost:5000/list_databases")
      .then((response) => response.json())
      .then((data) => setDatabases(data.databases))
      .catch((error) => console.error("Error:", error));
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenConfirm = (dbName) => {
    setSelectedDbName(dbName);
    setIsConfirmOpen(true);
  };
  const handleCloseConfirm = () => setIsConfirmOpen(false);

  const handleDbSelect = async (dbName) => {
    setSelectedDb(dbName);
    const response = await fetch(
      `http://localhost:5000/${dbName}/get_tables_info`
    );
    if (response.ok) {
      const data = await response.json();
      setTablesData(data.tables);
    }
  };

  return (
    <>
      <NavBar />
      <div className="px-12 mt-8 flex justify-between">
        <Panel
          onOpenModal={handleOpenModal}
          onDatabaseCreated={fetchDatabases}
          databases={databases}
          onOpenConfirm={handleOpenConfirm}
          onDbSelect={handleDbSelect}
        />
        <TablesRender tablesData={tablesData} />
        {isModalOpen && (
          <DatabaseModal
            onClose={handleCloseModal}
            onDatabaseCreated={fetchDatabases}
          />
        )}

        {isConfirmOpen && (
          <ConfirmDelete dbName={selectedDbName} onClose={handleCloseConfirm} />
        )}
      </div>
    </>
  );
}
