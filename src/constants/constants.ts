const brandName = "Codeperia";
const baseUrl = "https://codeperia.com";

const toastBaseStyling = {
  borderRadius: "0.5rem",
  padding: "0.3rem 1rem",
  width: "100%",
  height: "fit-content",
  maxWidth: "448px",
  fontWeight: 500,
  fontSize: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const foundersSocials = {
  abubakar: {
    linkedin: "https://www.linkedin.com/in/abubakar-aijaz-dev/",
    github: "https://github.com/ABUBAKARKHAN-Stack",
    x: "https://x.com/abubakar_stacky",
  },
  ubaid: {
    linkedin: "https://www.linkedin.com/in/sardar-ubaid-51b593375",
    github: "https://github.com/SardarUbaidullah",
    x: "#",
  },
  mansoor: {
    linkedin: "https://www.linkedin.com/in/themansoorshah ",
    github: "https://www.linkedin.com/in/themansoorshah",
    x: "#",
  },
};

const brandSocials = {
  instagram: "https://www.instagram.com/codeperia",
  facebook: "https://web.facebook.com/people/CodePeria/61581253827191/",
  linkedin: "https://www.linkedin.com/company/codeperia",
  x: "https://x.com/codeperia",
};

const brandContactInfo = {
  contact: "contact@codeperia.com",
  info: "info@codeperia.com",
  phone: "+92 328 7099399",
};

const testimonialsCSS = `

  .carousel {
    width: 100%;
    height: 100%;
    padding-bottom: 50px !important;
  }
  
  .carousel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 280px;
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.5 !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000 !important;
    background: rgba(255, 255, 255, 0.25) !important;
    backdrop-filter: blur(10px) !important;
    border-radius: 50% !important;
    width: 44px !important;
    height: 44px !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(255, 255, 255, 0.2) !important;
  }

`;

export {
  brandName,
  baseUrl,
  toastBaseStyling,
  foundersSocials,
  brandSocials,
  brandContactInfo,
  testimonialsCSS,
};
