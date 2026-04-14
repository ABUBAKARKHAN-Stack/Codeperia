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
    value: "info@t-solutionz.com",
    link: "mailto:info@t-solutionz.com",
    icon: Mail,
  },
  {
    label: "Help & Support",
    value: "support@t-solutionz.com",
    link: "mailto:support@t-solutionz.com",
    icon: Headphones,
  },
  {
    label: "Phone",
    value: "+92-3257030523",
    link: "tel:+923257030523",
    icon: Phone,
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/profile.php?id=61582284143059",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/official.tsolutionz",
  },
  {
    label: "Twitter (X)",
    icon: TwitterIcon,
    url: "https://x.com/T_Solutionz",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com/company/t-solutionz",
  },
];
