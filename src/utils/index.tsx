// "use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RainbowKitProvider, type Locale } from "@rainbow-me/rainbowkit";
import { config } from "@/utils/wagmi";
import { useRouter } from "next/router";
const queryClient = new QueryClient();

function WalletProvider({ children }) {
  // const { locale } = useRouter() as unknown as { locale: Locale };
  const { locale } = useRouter() as { locale: Locale };
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider locale={locale}>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default WalletProvider;
