import Navigation from "./navigation";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <main>
      <>
        <Head>
          <title></title>
        </Head>
        <Navigation />
        {children}
        <footer>
          <p>by dede</p>
        </footer>
      </>
    </main>
  );
};

export default Layout;
