import { Search } from "lucide-react";
function SearchAction() {
  return (
    <button className="flex mr-2 hover:text-white/60 transition-colors">
      <Search className="p-1 mr-2 text-cyan-600" /> Buscar
    </button>
  );
}

export default SearchAction;
