import { Title, Text, Container, Grid, Image } from "@mantine/core";

const BannerOne = () => {

  return (
    <section>
      <Container mt={70}>
        <Grid justify="space-around" align="center">
          <Grid.Col xs={6} sm={8} md={8} lg={8}>
            <div style={{ marginBottom: 20 }}>
              <Text >
                <Title order={1}>Puedes poner lo que quieras aquí</Title>
                Dennis Farina was one of Bla busiest actors and a familiar face
                to moviegoers and television viewers alike. In hm Saving Private
                Ryan, directed by Steven Spielberg, Farina played Col. Anderson,
                a pivotal role in the film.
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={4} lg={4}>
            <Image
              src="../lime-surfing.png"
              alt={"sample1"}
              style={{ width: "100%", maxWidth: 300 }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default BannerOne;
