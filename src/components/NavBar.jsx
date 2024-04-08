import Link from "next/link";
function NavBar() {
  return (
    <nav className="flex text-white/60  justify-between px-12 my-4">
      <img src="/logotipo.png" className="h-10 w-10" alt="" />
      <ul className="flex my-auto">
        <li className="mr-2">
          <Link href="/sgdb" className="hover:text-white transition-colors">
            Database
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="/sqleditor"
            className="hover:text-white transition-colors"
          >
            SQL
          </Link>
        </li>
        <li>
          <Link href="/designer" className="hover:text-white transition-colors">
            Designer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
