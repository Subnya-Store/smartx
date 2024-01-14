import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc,bscTestnet,sepolia} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import store from "../redux/store"; 
import { Provider } from "react-redux"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [publicProvider()]
); 

const projectId = "324304fba50b4e52dd420b48d2404f07";

const { wallets } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Rainbowkit Demo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;
