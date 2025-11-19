import { PortableTextChild } from "sanity";

interface IAuthor {
  name: string;
  source: string;
  role: string;
}

interface ISanityImage {
  source: string;
  alt: string;
}

enum TechStackTabs {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASES = "databases",
  MOBILE = "mobile",
  DEVOPSANDTOOLS = "devopsandtools",
}

interface IBlog {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  mainImage: ISanityImage;
  body: PortableTextChild[];
  author: IAuthor;
}

interface PortableTextBlock {
  _key: string;
  _type: "block" | string;
  children?: PortableTextChild[];
  markDefs?: { _key: string; _type: string }[];
  style?: string;
}

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

interface IService {
  title: string;
  shortDescription: string;
  slug: string;
  cardIcon: string;
  serviceImage: ISanityImage;
  body: PortableTextChild[];
}

interface IReview {
  _id: string;
  clientName: string;
  feedback: string;
  rating: number;
  approved: boolean;
  reviewedAt: string;
  _createdAt: string;
}

export {
  TechStackTabs,
  type IBlog,
  type PortableTextBlock,
  type IAuthor,
  type ISanityImage,
  type ErrorProps,
  type IService,
  type IReview,
};
