import { APP_NAME } from "@/constants/app.constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "", link = false }) => {
  return link ? (
    <Link href={"/"}>
      <LogoImage className={className} />
    </Link>
  ) : (
    <LogoImage className={className} />
  );
};

const LogoImage = ({ className = "" }) => {
  return (
    <Image
      src={"/assets/brand/logo.png"}
      className={cn(className, "w-auto resize object-contain")}
      height={50}
      width={50}
      priority
      unoptimized
      alt={`${APP_NAME} - Logo`}
    />
  );
};

export default Logo;
