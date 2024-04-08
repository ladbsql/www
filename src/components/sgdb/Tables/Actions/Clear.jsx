import { Eraser } from "lucide-react";
function ClearAction() {
  return (
    <button className="flex mr-2 hover:text-white/60 transition-colors">
      <Eraser className="p-1 mr-2 text-teal-600" /> Vaciar
    </button>
  );
}

export default ClearAction;
