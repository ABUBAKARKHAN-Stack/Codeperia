import { brandContactInfo } from "@/constants/constants";
import { useServices } from "@/context/services.context";

const { contact, info, phone } = brandContactInfo;
const footerData = {
  servicesLinks: [
    {
      name: "Web Development",
      link: "/services/web-development",
    },
    {
      name: "App Development",
      link: "/services/app-development",
    },
    {
      name: "Full Stack Development",
      link: "/services/full-stack-development",
    },
    {
      name: "UI/UX Design",
      link: "/services/ui-ux-design",
    },
    {
      name: "DevOps & Automation",
      link: "/services/devops-automation",
    },
  ],
  companyLinks: [
    { name: "About Us", link: "/about" },
    { name: "Our Team", link: "/about#team" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ],

  contactLink: [
    { name: "Contact Us", link: "/contact" },
    { name: info, link: `mailto:${info}` },
    { name: contact, link: `mailto:${contact}` },
    { name: phone, link: `tel:${phone}` },
  ],
};

export { footerData };
