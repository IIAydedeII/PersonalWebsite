import { Button, useToasts } from "@geist-ui/react";
import Layout from "../components/layout";

const Home = () => {
  const [toasts, setToast] = useToasts();
  const click = () => setToast({ text: "Böh." });

  return (
    <Layout>
      <div>
        <h1>Ana Sayfa</h1>
      </div>
      <Button onClick={click}>Tost</Button>
    </Layout>
  );
};

export default Home;
