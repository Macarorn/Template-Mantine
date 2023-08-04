import { Carousel } from "@mantine/carousel";
import { Text, Container, useMantineTheme, Title } from "@mantine/core";

const SectionOne = () => {
  const theme = useMantineTheme();

  const carouselContent = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    backgroundColor: theme.colors.yellow[5],
    borderRadius: 15,
    gap: 15,
  };

  return (
    <section id="section-one">
      <Container mt="xl" size="lg" >
        <Text align="center" mb="15px">
          <Title order={1}>Explica algo con este carrousel</Title>
        </Text>

        <Text align="center" mb="25px">
          Puedes insertar las imagenes o textos que necesites 🐈
        </Text>

        <Carousel
          withIndicators
          height={300}
          slideSize="33.333333%"
          slideGap="md"
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 15 },
          ]}
          loop
          align="start"
          pr="10px"
          pl="10px"
        >
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                1
              </Title>
              <Text color="black">Write something here.</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                2
              </Title>
              <Text color="black">Something here too.</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                3
              </Title>
              <Text color="black">Mh, maybe here too?</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                4
              </Title>
              <Text color="black">If d like to you could do that here...</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                5
              </Title>
              <Text color="black">Woah, you are quite convincing..</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2} color="black">
                6
              </Title>
              <Text color="black">And we are done with the cards!</Text>
            </div>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  );
};

export default SectionOne;
