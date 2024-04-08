import TableStructure from "./Tables/TableStructure";
function TablesRender({ tablesData }) {
  return (
    <div className="w-[78dvw] h-[80vh] ml-4 text-white p-4 h-100 rounded-lg bg-panelBg ">
      <TableStructure tablesData={tablesData} />
    </div>
  );
}
export default TablesRender;
