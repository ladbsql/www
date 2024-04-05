import NavBar from "@/components/NavBar";
import Tables from "@/components/sgdb/Tables";
export default function sgdb() {
  return (
    <>
      <NavBar />
      <div className="px-12 mt-8">
        <Tables />
      </div>
      <h1>SGDB</h1>
    </>
  );
}
