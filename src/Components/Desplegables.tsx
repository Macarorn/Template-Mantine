import { Accordion, Text, Container, Title, Badge } from "@mantine/core";

const Desplegables = () => {
  //const theme = useMantineTheme();

  return (
    <section>
      <Container  mt={70}>
        <div>
          <div style={{ textAlign: "left" }}>
            <Badge variant="filled" color="yellow">
              FAQs
            </Badge>
          </div>
          <Text color="black">
            <Title order={1} style={{ marginTop: 10 }}>
              Preguntas frecuentes(?)
            </Title>
          </Text>
        </div>
        <Accordion chevronPosition="left">
          <Accordion.Item value="customization">
            <Accordion.Control>¿A que huele una Jirafa?</Accordion.Control>
            <Accordion.Panel>No tengo ni la menor idea</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="naranja">
            <Accordion.Control>
              ¿Qué fue primero en el naranja, el color o la fruta?
            </Accordion.Control>
            <Accordion.Panel>La fruta crack ;)</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="perros">
            <Accordion.Control>
              ¿Si los perros pudieran hablar nos lo dirían?
            </Accordion.Control>
            <Accordion.Panel>
              Si, en todo caso serían faciles de sobornar por algo de comida
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="amarillo">
            <Accordion.Control>¿Te gusta el amarillo?</Accordion.Control>
            <Accordion.Panel>
              No tanto la verdad
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Desplegables;
