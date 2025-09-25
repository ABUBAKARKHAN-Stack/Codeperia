"use client";
import { createContext, useContext, useState } from "react";
import { IService } from "@/types/main.types";

type ServicesContextType = {
  services: IService[];
};

const ServicesContext = createContext<ServicesContextType | null>(null);

export const ServicesProvider = ({
  children,
  services,
}: {
  children: React.ReactNode;
  services: IService[];
}) => {
  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be inside ServicesProvider");
  return ctx;
};
