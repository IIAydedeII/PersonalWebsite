import { Text } from "@geist-ui/react";
import { Code } from "@geist-ui/react";
import { Divider } from "@geist-ui/react";
import Layout from "../components/layout";

const Article = () => {
  return (
    <>
      <Text p>
        Bu metin bir deneme metnidir. Bu metin bir deneme metnidir. Bu metin bir
        <Text i> deneme</Text> metnidir. Bu metin bir deneme metnidir. Bu metin
        bir deneme metnidir. Bu metin bir deneme metnidir.
      </Text>
      <Text blockquote>Bu metin bir deneme metnidir.</Text>
      <Text>
        Bu metin bir deneme metnidir. Bu metin bir <Text small>deneme </Text>
        metnidir. Bu metin bir deneme metnidir. Bu metin bir
        <Text b> deneme</Text> metnidir. Bu metin bir deneme metnidir. Bu metin
        bir deneme metnidir.
      </Text>
      <Divider />
      <Text type="error">Bu metin bir deneme metnidir.</Text>
      <Text>
        Bu metin bir deneme metnidir.{" "}
        <Text del>Bu metin bir deneme metnidir.</Text> Bu metin bir deneme
        metnidir.<Code> Bu metin bir deneme metnidir.</Code> Bu metin bir deneme
        metnidir. Bu metin bir deneme metnidir.
      </Text>
    </>
  );
};

const About = () => {
  return (
    <Layout>
      <h2>Hakkımda</h2>
      <Article />
    </Layout>
  );
};

export default About;
