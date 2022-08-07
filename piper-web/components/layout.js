import Head from "next/head";
import Navbar from "./navbar";
import Container from "react-bootstrap/Container";

function Layout({ children }) {
  return (
    <>
      <Head>        
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/metropolis" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <title>Piper Mountain Webs</title>
      </Head>

      <Navbar></Navbar>
      <div className="mb-4 bg-light rounded-3">
        {children}
      </div> 

    </>
  );
}

export default Layout;
