"use client";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "@/utils/wagmi";
import { UserContextProvider } from "@/context";

// const queryClient = new QueryClient();

function WalletProvider({ children }) {
  return (
    <div>
      <UserContextProvider>{children}</UserContextProvider>
    </div>
  );
}

export default WalletProvider;
