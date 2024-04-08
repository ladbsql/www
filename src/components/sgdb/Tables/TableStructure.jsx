import SearchAction from "./Actions/Search";
import StructureAction from "./Actions/Structure";
import InsertAction from "./Actions/Insert";
import ClearAction from "./Actions/Clear";
import DeleteAction from "./Actions/Delete";
function TableStructure({ tablesData }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs text-gray-800 uppercase bg-emerald-500 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tabla
            </th>
            <th scope="col" className="px-6 py-3">
              Acción
            </th>
            <th scope="col" className="px-6 py-3">
              Registros
            </th>
          </tr>
        </thead>
        <tbody>
          {tablesData.map((table) => (
            <tr className="odd:bg-transparent  even:bg-tableColumn ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {table.name}
              </th>
              <td className="px-6 py-4 flex ">
                <SearchAction />
                <StructureAction />
                <InsertAction />
                <ClearAction />
                <DeleteAction />
              </td>
              <td className="px-6 py-4">{table.record_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableStructure;
