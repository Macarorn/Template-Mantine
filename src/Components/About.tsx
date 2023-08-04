import {
  Text,
  Container,
  Anchor,
  Grid,
  MediaQuery,
  Image,
  Button,
  Chip,
} from "@mantine/core";
import { MdArrowForward } from "react-icons/md";

const About = () => {
  //const theme = useMantineTheme();

  return (
    <section id="about">
      <Container size="md" mt={50}>
        <Grid justify="center" align="center">
          <Grid.Col sm={12} md={8} lg={8}>
            <div style={{ marginBottom: 20 }}>
              <Text>
                <MediaQuery
                  query="(max-width: 1200px)"
                  styles={{ fontSize: "2.5rem !important" }}
                >
                  <h1>Este es un Template simple para Mantine</h1>
                </MediaQuery>
              </Text>
            </div>
            <div style={{ marginBottom: 50 }}>
              <Text size="xl">
                Ejemplificación simple de una librería poderosa y bien
                implementada llamada{" "}
                <Anchor href="https://mantine.dev/" target="_blank" color="yellow">
                  Mantine
                </Anchor>
                .
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginBottom: 50,
              }}
            >
              <Chip value="typescript" checked color="yellow">
                Typescript
              </Chip>
              <Chip value="hooks" checked color="yellow">
                Muchos Hooks
              </Chip>
              <Chip value="componentes-bonitos" checked color="yellow">
                Componentes bonitos
              </Chip>
              <Chip value="hooks" checked color="yellow">
                Responsive
              </Chip>
            </div>
            <Button color="yellow" rightIcon={<MdArrowForward size={16} />}>
              Quiero explorar más
            </Button>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={4}>
            <Image
              src="../lime-travel.png"
              alt="With default placeholder"
              withPlaceholder
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
