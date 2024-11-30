"use client";
import React, { useContext, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Container,
  Center,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
// import { AppContext } from "../../Context";
// import toast from "react-hot-toast";
import Navbar from "../Navbar/Nav2";
import Footer from "../Footer";
// import { useAccount } from "wagmi";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BackgroundLines } from "@/components/ui/background-lines";
// import WalletButton from "../WalletButton";
import OptionModal from "./Modal";
// import { useAppDispatch, useAppSelector } from "../../redux/hook";
// import { CampaignT } from "../../redux/types";
// import { useGetAllCampaigns } from "../functions";

function ConnectWallet() {
  // const dispatch = useAppDispatch();
  // const wallet = useAppSelector((state) => state.tronData);
  // const campaigns = useAppSelector((state) => state.campaign);
  // const { getSmartContract, onToggle, isOpen } = useContext(AppContext);
  // const { getAllCampaigns } = useGetAllCampaigns();

  return (
    <BackgroundLines className="flex  bg-custom-gradient  w-full flex-col px-4">
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Container>
          <Center flexDirection="column">
            <Text
              fontWeight={500}
              textAlign={"center"}
              fontSize={{ base: "24px", md: "32px" }}
              mx={"8%"}
            >
              Connect your wallet to buy nfts and other assets
            </Text>
            <Flex mt={8}>{/* <WalletButton /> */}</Flex>
          </Center>
        </Container>
        {/* <OptionModal onToggle={onToggle} isOpen={isOpen} /> */}

        <Footer />
      </div>
    </BackgroundLines>
  );
}

export default ConnectWallet;

function ConnectionModal() {
  return {};
}
