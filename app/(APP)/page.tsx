import {
  HeroSection,
  FeaturesSection,
  ServicesSection,
  AboutPreviewSection,
  ApproachSection,
  CTASection,
  FAQSection,
  TestimonialsSection,
  WhyChooseUsSection,
  PortfolioSection,
} from "@/components/sections/landing";

const HomePage = async () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Portfolio Section  */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blogs Section  */}
      {/* <BlogSection /> */}

      {/* Our Approach */}
      <ApproachSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section  */}
      <CTASection />
    </>
  );
};

export default HomePage;
