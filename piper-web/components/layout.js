import Head from "next/head";
import Navbar from "./navbar";
import Script from "next/script";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/metropolis" type="text/css" />
        <title>Piper Mountain Webs</title>
      </Head>

      <Navbar></Navbar>
      <div className="mb-4 bg-light rounded-3">{children}</div>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></Script>

      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link px-2 text-muted">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link px-2 text-muted">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/services">
                <a class="nav-link px-2 text-muted">Services</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/sample-sites">
                <a class="nav-link px-2 text-muted">Sample Sites</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link px-2 text-muted">Contact</a>
              </Link>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; {new Date().getFullYear()} Piper Mountain Webs</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
