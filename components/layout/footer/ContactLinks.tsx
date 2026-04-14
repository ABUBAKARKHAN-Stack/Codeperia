import { contactInfo } from "@/constants/navigation.constants";
import { ArrowUpRight } from "lucide-react";

const ContactLinks = () => {
  return (
    <div className="space-y-6 lg:col-span-3">
      <h4 className="text-foreground/40 mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
        Contact
      </h4>
      <ul className="space-y-4">
        {contactInfo.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className="text-foreground/60 hover:text-accent group flex items-center gap-3 text-sm transition-colors duration-300"
            >
              <div className="bg-foreground/10 group-hover:bg-accent/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
                <item.icon className="h-3.5 w-3.5" />
              </div>
              {item.value}
              <ArrowUpRight className="h-3 w-3 shrink-0 -translate-x-2 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLinks;
