import {
  FacebookIcon,
  Headphones,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  Mail,
  Phone,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const contactInfo = [
  {
    label: "Mail",
    value: "info@codeperia.com",
    link: "mailto:info@codeperia.com",
    icon: Mail,
  },
  {
    label: "Help & Support",
    value: "support@codeperia.com",
    link: "mailto:info@codeperia.com",
    icon: Headphones,
  },
  {
    label: "Phone",
    value: "+92-3713711615",
    link: "tel:+923713711615",
    icon: Phone,
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    url: "https://web.facebook.com/people/CodePeria/61581253827191/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/codeperia",
  },
  {
    label: "Twitter (X)",
    icon: TwitterIcon,
    url: "https://x.com/codeperia",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/company/codeperia",
  },
];
