import {
  ALTERNATE_NAME,
  APP_NAME,
  BASE_URL,
  BRAND_DESCRIPTION,
} from "@/constants/app.constants";
import { contactInfo, socials } from "@/constants/navigation.constants";

type Props = {
  schema?: any;
};

const defaultSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: APP_NAME,
      alternateName: ALTERNATE_NAME,
      url: BASE_URL,
      logo: `${BASE_URL}/assets/brand/favicons/android-chrome-512x512.png`,
      description: BRAND_DESCRIPTION,
      sameAs: socials?.map((social) => social.url) || [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contactInfo?.find((c) => c.label === "Phone")?.value || "",
          email: contactInfo?.find((c) => c.label === "Mail")?.value || "",
          contactType: "customer service",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: APP_NAME,
      description: BRAND_DESCRIPTION,
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

const JsonLd = ({ schema = defaultSchema }: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default JsonLd;
