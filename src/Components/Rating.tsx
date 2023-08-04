import { Container, Rating, useMantineTheme, rem } from "@mantine/core";
import {
  TbMoodEmpty,
  TbMoodCry,
  TbMoodSad,
  TbMoodSmile,
  TbMoodHappy,
  TbMoodCrazyHappy,
} from "react-icons/tb";


const getEmptyIcon = (value: number) => {
  const defaultProps = { size: rem(24), color: "gray" };
  switch (value) {
    case 1:
      return <TbMoodCry {...defaultProps} />;
    case 2:
      return <TbMoodSad {...defaultProps} />;
    case 3:
      return <TbMoodSmile {...defaultProps} />;
    case 4:
      return <TbMoodHappy {...defaultProps} />;
    case 5:
      return <TbMoodCrazyHappy {...defaultProps} />;
    default:
      return <TbMoodEmpty {...defaultProps} />;
  }
};
 //eslint-disable
const getFullIcon = (value: number) => {
  const defaultProps = { size: rem(24) };
  const theme = useMantineTheme();

  switch (value) {
    case 1:
      return <TbMoodCry {...defaultProps} color={theme.colors.red[7]} />;
    case 2:
      return <TbMoodSad {...defaultProps} color={theme.colors.orange[7]} />;
    case 3:
      return <TbMoodSmile {...defaultProps} color={theme.colors.yellow[7]} />;
    case 4:
      return <TbMoodHappy {...defaultProps} color={theme.colors.lime[7]} />;
    case 5:
      return (
        <TbMoodCrazyHappy {...defaultProps} color={theme.colors.green[7]} />
      );
    default:
      return <TbMoodEmpty {...defaultProps} />;
  }
};

const Rat = () => {
  const theme = useMantineTheme();

  return (
    <section id="section-one">
      <Container mt="xl" size="lg">
        <Rating
          emptySymbol={getEmptyIcon}
          fullSymbol={getFullIcon}
          highlightSelectedOnly
        />
      </Container>
    </section>
  );
};

export default Rat;
