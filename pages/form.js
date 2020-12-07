import { Grid, Spacer, Divider, Button, Card } from "@geist-ui/react";
import Layout from "../components/layout";

const { Container } = Grid;

const MockItem = () => {
  return <Card shadow style={{ width: "100%", height: "50px" }} />;
};

const Form = () => {
  return (
    <Layout>
      <h2>Form</h2>
      <Spacer y="1" />
      <h6>
        Bilgilerinizin otomatik gelmesini ve başvurunuzun durumunu web
        sitemizden takip etmek istiyorsanız <a>oturum açabilir</a> veya{" "}
        <a>kayıt olabilirsiniz</a>
      </h6>
      <Spacer y="1" />
      <Container justify="center">
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
        <Divider />
        <Grid xs={24}>
          <Button />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Form;
