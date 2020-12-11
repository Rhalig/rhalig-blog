import Navigation from "../components/Navigation";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Umut'un Websitesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Design by Umut</footer>
    </div>
  );
}

export default Layout;
