import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top ">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand text-light">Piper Mountain Webs</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="/about">
                <a className="nav-link py-3 px-0 px-lg-3 rounded text-light">About</a>
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="/services">
                <a className="nav-link py-3 px-0 px-lg-3 rounded text-light">Services</a>
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="/sample-sites">
                <a className="nav-link py-3 px-0 px-lg-3 rounded text-light">Sample Sites</a>
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="/contact">
                <a className="nav-link py-3 px-0 px-lg-3 rounded text-light">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
