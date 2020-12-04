import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
