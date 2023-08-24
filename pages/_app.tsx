import { AppProps } from "next/app";
import Head from "next/head";
import { Flex, MantineProvider } from "@mantine/core";
import About from "../src/Components/About";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Botones from "../src/Components/Botones";
import Rat from "../src/Components/Rating";
import Components from "../src/Components/Components";
import BannerOne from "../src/Components/BannerOne";
import Cards from "../src/Components/Cards";
import BanerTwo from "../src/Components/BanerTwo";
import Carrousel from "../src/Components/Carrousel";
import Desplegables from "../src/Components/Desplegables";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Header />
      <About />
      <Botones />
      <BannerOne />
      <Components />
      <Cards />
      <BanerTwo />
      <Carrousel />
      <Desplegables />

      <Flex align="center" justify="center">
        <Rat />
      </Flex>

      <Footer />

      <Head>
        <title>Mantine Template</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
