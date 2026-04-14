"use client";

import { IPortfolioOverview } from "@/types/portfolio.types";
import { createContext, ReactNode, useContext } from "react";

type PortfolioContextType = {
  portfolioOverview: IPortfolioOverview[];
};
const PortfolioContext = createContext<PortfolioContextType | null>(null);

const PortfolioContextProvider = ({
  children,
  portfolioOverview,
}: PortfolioContextType & { children: ReactNode }) => {
  return (
    <PortfolioContext.Provider
      value={{
        portfolioOverview,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx)
    throw new Error(
      "usePortfolio must be wrap within the PortfolioContextProvider.",
    );
  return ctx;
};

export { PortfolioContextProvider, usePortfolio };
