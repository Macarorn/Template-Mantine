import { Button, Badge, Burger, Flex } from "@mantine/core";
import React from "react";

const Header = () => {
  //const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header>
      <Flex justify="center" align="center" gap="65%" mt={34}>
        <div>
          <Badge size="lg" radius={10} color="orange">
            A simple Mantine
          </Badge>
        </div>
        <div>
          <Button
            color="orange"
            onClick={() => redirectToLink("https://mantine.dev/")}
          >
            Check out Mantine
          </Button>
        </div>
      </Flex>

      {/* <Flex className="content-mobile">
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      </Flex> */}

    </header>
  );
};

export default Header;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
