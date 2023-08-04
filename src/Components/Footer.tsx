import { useMantineTheme, Container, Grid, Text, Button } from "@mantine/core";

const Footer = () => {
  const theme = useMantineTheme();

  return (
    <footer style={{ backgroundColor: theme.colors.orange[9] }}>
      <Container mt={50} p={30}>
        <Grid justify="space-around">
          <Grid.Col xs={12} sm={8} md={9} lg={9}>
            <Text
              size="xl"
              weight={700}
              color="white"
              style={{ marginBottom: 20 }}
            >
              Una Template de Mantine
            </Text>
            <Text color="white" style={{ marginBottom: 20 }}>
              Las posibilidades son ilimitadas
            </Text>
            <Button
              variant="white"
              color="black"
              onClick={() => redirectToLink("https://mantine.dev/")}
            >
              Documentación Mantine
            </Button>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={3} lg={3}>
            <Text
              size="xl"
              weight={700}
              color="white"
              style={{ marginBottom: 10 }}
            >
              Template modificada por
            </Text>
            <a href="https://github.com/Macarorn" style={{ color: "white" }}>
              Macarron ;)
            </a>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
