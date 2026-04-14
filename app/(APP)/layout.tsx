import { PortfolioContextProvider } from "@/context/PortfolioContext";
import { ServiceContextProvider } from "@/context/ServiceContext";
import { getPortfolioOverview } from "@/helpers/portfolio.helper";
import { getServicesOverview } from "@/helpers/service.helper";
import RootProvider from "@/providers/RootProvider";
import { SanityLive } from "@/sanity/lib/live";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [servicesOverviewResponse, portfolioOverviewResponse] =
    await Promise.allSettled([getServicesOverview(), getPortfolioOverview()]);

  const servicesOverview =
    servicesOverviewResponse.status === "fulfilled"
      ? servicesOverviewResponse.value
      : [];
  const portfolioOverview =
    portfolioOverviewResponse.status === "fulfilled"
      ? portfolioOverviewResponse.value
      : [];

  return (
    <ServiceContextProvider servicesOverview={servicesOverview}>
      <PortfolioContextProvider portfolioOverview={portfolioOverview}>
        <RootProvider>{children}</RootProvider>
        <SanityLive />
      </PortfolioContextProvider>
    </ServiceContextProvider>
  );
}
