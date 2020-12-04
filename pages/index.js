import { Button, useToasts } from "@geist-ui/react";
import Layout from "../components/layout";

const Home = () => {
  const [toasts, setToast] = useToasts();
  const click = () =>
    setToast({ text: "The Evil Rabbit jumped over the fence." });

  return (
    <Layout>
      <div>
        <h1>Ana Sayfa</h1>
      </div>
      <Button onClick={click}>Show Toast</Button>
    </Layout>
  );
};

export default Home;
