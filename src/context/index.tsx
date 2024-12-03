"use client";
import React, { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

interface DrawerParam {
  title: string;
  body: string;
}

const UserContext = React.createContext<{
  isModalOpen: any;
  setIsModalOpen: any;
  assignId: any;
  activeId: any;
}>({
  isModalOpen: undefined,
  setIsModalOpen: undefined,
  assignId: undefined,
  activeId: undefined,
});

export const useUserContext = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const { address } = useAccount();
  const router = useRouter();

  const assignId = (id: number) => {
    setActiveId(id);
    setIsModalOpen(true);
  };

  React.useEffect(() => {
    if (address == null) {
      router.push("/");
    }
  }, [address]);

  return {
    isModalOpen,
    setIsModalOpen,
    assignId,
    activeId,
  };
};

export const UserContextProvider = ({ children }) => {
  const auth = useUserContext();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export const useClient = () => useContext(UserContext);
