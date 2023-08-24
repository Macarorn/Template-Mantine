    import { Grid, Text, Container, Title, Image, Button } from "@mantine/core";

    const BanerTwo = () => {

      return (
        <section>
          <Container mt={80} style={{ marginBottom: 80 }}>
            <Grid justify="space-around">
              <Grid.Col xs={6} sm={4} md={4} lg={4}>
                <Image
                  src="../lime-bicycle-riding.png"
                  alt={"sample2"}
                  style={{ width: "100%", maxWidth: 300 }}
                />
              </Grid.Col>
              <Grid.Col xs={6} sm={8} md={8} lg={8}>
                <div style={{ marginBottom: 20 }}>
                  <Text>
                    <Title order={1}>Pon algo acá también</Title>
                    Dennis Farina is unique among thespians in that he was one
                    of the few to achieve success as a late-bloomer. He did not
                    start acting until he was 37 years old, after stints in the
                    military and 18 years on the Chicago Police Department.
                  </Text>
                </div>
                <Button color="yellow">Me interesa</Button>
              </Grid.Col>
            </Grid>
          </Container>
        </section>
      );
    };

    export default BanerTwo;