import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../store/store";
import { ConnectWalletProvider } from "../contexts/ConnectWalletContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectWalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConnectWalletProvider>
  );
}

export default wrapper.withRedux(MyApp);
