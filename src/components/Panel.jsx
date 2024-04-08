"use client";
import { useEffect, useState } from "react";
import CreateTable from "./sgdb/Tables/CreateDatabase";
import TableButton from "./sgdb/Tables/TableButton";
function Panel({ onOpenModal, onOpenConfirm, databases, onDbSelect }) {
  return (
    <div className="bg-panelBg w-80 py-6 px-6 rounded-lg">
      <CreateTable onClick={onOpenModal}>Nueva Base de Datos</CreateTable>
      {databases.map((db) => (
        <TableButton
          key={db}
          dbName={db}
          onOpenConfirm={onOpenConfirm}
          onDbSelect={onDbSelect}
        >
          {db}
        </TableButton>
      ))}
    </div>
  );
}

export default Panel;
