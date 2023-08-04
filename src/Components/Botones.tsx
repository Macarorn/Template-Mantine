import {
  Accordion,
  Text,
  Container,
  Title,
  Badge,
  Button,
  Group,
} from "@mantine/core";
import { MdOutlineOpenWith, MdOutlineOpenInNew } from "react-icons/md";

const Botones = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-one">
      <Container mt={70}>
        <div>
          <Text color="black">
            <Title order={1} style={{ marginTop: 10 }}>
              Grupo de Botones
            </Title>
            <Text align="center" mb="25px">
              Podrás elegír entre variedad de botones para estilizar
            </Text>
          </Text>
        </div>
        <Group mt={50} position="center">
          <Button size="xl">Meow 1</Button>
          <Button
            size="xl"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Meow 2
          </Button>
          <Button
            variant="gradient"
            size="xl"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
          >
            Meow 3
          </Button>
          <Button
            variant="gradient"
            size="xl"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            Meow 4
          </Button>
          <Button
            variant="gradient"
            size="xl"
            gradient={{ from: "orange", to: "red" }}
          >
            Meow 5
          </Button>
          <Button
            variant="gradient"
            size="xl"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          >
            Meow 6
          </Button>
          <Button size="xl" leftIcon={<MdOutlineOpenWith />} variant="light">
            Meow 7
          </Button>
          <Button
            data-disabled
            size="xl"
            sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
            onClick={(event) => event.preventDefault()}
          >
            Disabled meow 8
          </Button>
          <Button
            component="a"
            href="https://pixabay.com/es/images/search/gato/"
            variant="outline"
            size="xl"
            leftIcon={<MdOutlineOpenInNew size="0.9rem" />}
          >
            New Meow 9
          </Button>
          <Button compact size="xl">
            My compact meow 10
          </Button>
          ;
        </Group>
      </Container>
    </section>
  );
};

export default Botones;
