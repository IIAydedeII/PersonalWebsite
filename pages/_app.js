import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/app.css";
import "../styles/components/navigation.css";
import "../styles/components/layout.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
