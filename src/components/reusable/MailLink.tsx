import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

type Props = { mail: string; forTel?: boolean; showIcon?: boolean };

const MailLink: FC<Props> = ({ mail, forTel = false, showIcon = false }) => {
  return (
    <Link
      href={forTel ? `tel:${mail}` : `mailto:${mail}`}
      passHref
      className="flex items-center gap-x-4 text-purple-300"
    >
      {showIcon &&
        (forTel ? <Phone className="size-5" /> : <Mail className="size-5" />)}
      <span>{mail}</span>
    </Link>
  );
};

export default MailLink;
