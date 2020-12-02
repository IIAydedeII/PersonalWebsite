import Navigation from "./navigation";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <main>
      <Head>
        <title>Next.js sitem</title>
      </Head>
      <Navigation />
      {children}
      <footer>
        <p>by dede</p>
      </footer>
    </main>
  );
}
