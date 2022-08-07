import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return  <>
            <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
              />
              <title>Piper Mountain Webs</title>
            </Head>
            <Component {...pageProps} />
          </>
}

export default MyApp
