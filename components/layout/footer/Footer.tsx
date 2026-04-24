import ContainerLayout from "../ContainerLayout";
import BrandInfo from "./BrandInfo";
import QuickLinks from "./QuickLinks";
import ServicesLinks from "./ServicesLinks";
import ContactLinks from "./ContactLinks";
import CopyRight from "./CopyRight";
import MaskedBrandName from "./MaskedBrandName";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <ContainerLayout className="py-20">
        {/* Masked Brand Name  */}
        <MaskedBrandName />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Info  */}
          <BrandInfo />

          {/* Quick Links */}
          <QuickLinks />

          {/* Services Links */}
          <ServicesLinks />

          {/* Contact Links */}
          <ContactLinks />
        </div>

        {/* Copy Right  */}
        <CopyRight />
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
