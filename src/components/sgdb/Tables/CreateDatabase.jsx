import { SquarePlus } from "lucide-react";
function CreateTable({ children, onClick }) {
  return (
    <button
      className="text-white/60 bg-panelButtons w-full py-4 rounded-md hover:bg-panelButtons/70 transition-colors flex p-2 underline mb-4"
      onClick={onClick}
    >
      <SquarePlus className="mr-2 ml-2 text-amber-400" /> {children}
    </button>
  );
}

export default CreateTable;
