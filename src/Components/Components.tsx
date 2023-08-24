import { Container, MediaQuery, Text } from "@mantine/core";

const Components = () => {
  //const theme = useMantineTheme();

  return (
    <section id="about">
      <Container size="md" mt={50}>
        <div style={{ marginBottom: 20 }}>
          <Text>
            <MediaQuery
              query="(max-width: 1200px)"
              styles={{ fontSize: "2.5rem !important" }}
            >
              <h1>Esta es una sección de ejemplo de containers implementados con flex</h1>
            </MediaQuery>
          </Text>
        </div>
        <Container bg="gray">Default container</Container>

        <Container size="xs" px="xs" bg="blue">
          xs container with xs horizontal padding
        </Container>

        <Container size="30rem" px={0} bg="red">
          30rem container with 0 horizontal padding
        </Container>
      </Container>
    </section>
  );
};

export default Components;
