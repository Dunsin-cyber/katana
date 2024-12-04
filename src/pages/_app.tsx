import "@/styles/globals.css"; // Import global CSS
import WalletProvider from "@/utils/index"; // Wrap with context
import { Provider } from "@/components/ui/provider";
import { UserContextProvider } from "@/context";
import { Toaster } from "react-hot-toast";

import localFont from "next/font/local";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const App = ({ Component, pageProps }) => {
  return (
    <Provider>
      <WalletProvider>
        <Toaster />
        <UserContextProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
          >
            <Component {...pageProps} />
          </div>
        </UserContextProvider>
      </WalletProvider>
    </Provider>
  );
};

export default App;
