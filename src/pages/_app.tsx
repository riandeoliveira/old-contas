import { StyledComponentsRegistry } from "libs/registry";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "styles/global";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <StyledComponentsRegistry>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </StyledComponentsRegistry>
    </>
  );
};

export default App;
