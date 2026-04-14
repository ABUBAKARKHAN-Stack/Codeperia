import { navLinks } from "@/constants/navigation.constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-foreground/40 mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
        Navigation
      </h4>
      <ul className="space-y-3">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              href={link.to}
              className="text-foreground/60 hover:text-accent group flex items-center gap-1 text-sm transition-colors duration-300"
            >
              {link.label}
              <ArrowUpRight className="h-3 w-3 shrink-0 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
