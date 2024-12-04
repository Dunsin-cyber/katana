import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Define the custom chain
const bleTestent = defineChain({
  id: 52085143, // Chain ID
  name: "Ble Testnet",
  network: "ble-testent",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.ethena.fi"],
    },
    public: {
      http: ["https://testnet.rpc.ethena.fi"],
    },
  },
  blockExplorers: {
    default: {
      name: "Ble Testnet Explorer",
      url: "https://testnet.explorer.ethena.fi",
    },
  },
  testnet: true,
});

// Configure RainbowKit
export const config = getDefaultConfig({
  appName: "Katana",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    bleTestent,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [bleTestent] : []),
  ],
  ssr: true,
});
