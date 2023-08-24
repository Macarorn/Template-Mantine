import { Box, Container, MediaQuery, Text, Flex, Anchor } from "@mantine/core";

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
              <h1>Contenedores</h1>
            </MediaQuery>
          </Text>
        </div>
        <div style={{ marginBottom: 50 }}>
          <Text size="xl">
            Esta es una sección de ejemplo de{" "}
            <Anchor
              href="https://mantine.dev/core/container/"
              target="_blank"
              color="yellow"
            >
              containers
            </Anchor>{" "}
            implementados con{" "}
            <Anchor
              href="https://mantine.dev/core/flex/"
              target="_blank"
              color="yellow"
            >
              flex
            </Anchor>{" "}
            .
          </Text>
        </div>
        <Flex mih={50} gap="md" justify="center" align="center" direction="row">
          <Container c="black.6" w={500} h={400}>
            <Box
              w="100%"
              h="100%"
              bg="orange"
              sx={(theme) => ({
                textAlign: "center",
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
              })}
              fw={700}
            >
              Esta es una caja de prueba.
            </Box>
          </Container>
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="nowrap"
          >
            <Container px="xs" w={350} h={300}>
              <Box
                w="100%"
                h="100%"
                bg="blue.6"
                sx={(theme) => ({
                  textAlign: "center",
                  textJustify: "initial",
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                })}
                fw={700}
              >
                Esta es una caja de prueba.
              </Box>
            </Container>

            <Container size="30rem" px={0} w={250} h={200}>
              <Box
                w="100%"
                h="100%"
                bg="yellow"
                sx={(theme) => ({
                  textAlign: "center",
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                })}
                fw={700}
              >
                Esta es una caja de prueba.
              </Box>
            </Container>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Components;
