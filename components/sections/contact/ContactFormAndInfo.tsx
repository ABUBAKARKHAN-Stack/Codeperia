import ContactForm from "./ContactForm";
import { ContainerLayout } from "@/components/layout";
import ContactInfo from "./ContactInfo";

const ContactFormAndInfo = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="bg-accent/5 absolute top-0 right-0 -z-10 h-125 w-125 rounded-full blur-[150px]" />
      <ContainerLayout>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Contact Form  */}
          <ContactForm />

          {/* Contact Info */}
          <ContactInfo />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ContactFormAndInfo;
