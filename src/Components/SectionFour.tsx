import {
  useMantineTheme,
  Container,
  Text,
  Title,
  Grid,
  Card,
  Image,
  Badge,
  Button,
  Group,
} from "@mantine/core";

const SectionFour = () => {
  const theme = useMantineTheme();

  return (
    <section id="section-two">
      <Container mt={70}>
        <Text color="black" align="center">
          <Title order={1} style={{ marginBottom: 30 }}>
            Estas Cards son muy cool
          </Title>
        </Text>

        <Grid>
          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" padding="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src="../lime-travel.png" alt={"sample1"} />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>History of Dennis Farina</Text>
                <Badge color="orange" variant="filled">
                  Cool badge
                </Badge>
              </Group>

              <Text size="sm">
                Discover the career of Dennis Farina and his roles in movies!
              </Text>

              <Button
                variant="light"
                color="orange"
                fullWidth
                style={{ marginTop: 14 }}
              >
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" padding="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src="../lime-canoeing.png" alt={"sample1"} />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>Career of Dennis Farina</Text>
                <Badge color="orange" variant="light">
                  Cool badge 2
                </Badge>
              </Group>

              <Text size="sm">
                Dennis Farina had a really great career with many opportunities!
              </Text>

              <Button
                variant="light"
                color="orange"
                fullWidth
                style={{ marginTop: 14 }}
              >
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" padding="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src="../lime-message-sent.png" alt={"sample1"} />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>Major roles of Dennis Farina</Text>
                <Badge color="orange" variant="dot">
                  Cool badge 3
                </Badge>
              </Group>

              <Text size="sm">
                Discover the major roles of Dennis Farina and something else!
              </Text>

              <Button
                variant="light"
                color="orange"
                fullWidth
                style={{ marginTop: 14 }}
              >
                Find out
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionFour;
