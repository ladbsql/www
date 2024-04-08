import { Trash } from "lucide-react";
function DeleteAction() {
  return (
    <button className="flex mr-2 hover:text-white/60 transition-colors">
      <Trash className="p-1 mr-2 text-red-500" /> Borrar
    </button>
  );
}

export default DeleteAction;
