"use client";
import React, { useContext, useState } from "react";

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

  const assignId = (id: number) => {
    setActiveId(id);
    setIsModalOpen(true);
  };
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
