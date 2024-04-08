import NavBar from "@/components/NavBar";
import Panel from "@/components/Panel";
import Editor from "@/components/sqleditor/Editor";
export default function sqleditorrender() {
  return (
    <>
      <NavBar />
      <div className="px-12 mt-8 flex justify-between">
        <Panel />
        <Editor />
      </div>
    </>
  );
}
