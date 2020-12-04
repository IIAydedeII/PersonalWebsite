import styled from "styled-components";
import { Text } from "@geist-ui/react";
import Layout from "../components/layout";

const Div = styled.div`
  border: 1px solid #f00;
`;

const Cont = () => {
  return (
    <Div>
      <h2>Hakkında</h2>
      <Text>
        Bu metin bir deneme metnidir. Bu metin bir deneme metnidir. Bu metin bir
        deneme metnidir. Bu metin bir deneme metnidir. Bu metin bir deneme
        metnidir. Bu metin bir deneme metnidir.
      </Text>
      <Text b>
        Bu metin bir deneme metnidir. Bu metin bir deneme metnidir. Bu metin bir
        deneme metnidir. Bu metin bir deneme metnidir. Bu metin bir deneme
        metnidir. Bu metin bir deneme metnidir.
      </Text>
    </Div>
  );
};

const About = () => {
  return (
    <Layout>
      <Cont />
    </Layout>
  );
};

export default About;
