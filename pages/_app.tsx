import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import About from "../src/Components/About";
import SectionOne from "../src/Components/SectionOne";
import Header from "../src/Components/Header";
import SectionTwo from "../src/Components/SectionTwo";
import SectionThree from "../src/Components/SectionThree";
import SectionFour from "../src/Components/SectionFour";
import SectionFive from "../src/Components/SectionFive";
import Footer from "../src/Components/Footer";
import Botones from "../src/Components/Botones";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Header />
      <About />
      <Botones />
      <SectionTwo />
      <SectionFour />
      <SectionThree />
      <SectionOne />
      <SectionFive />
      <Footer />
      <Head>
        <title>Bubble Cat</title>
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
