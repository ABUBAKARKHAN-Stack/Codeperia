import { IImage, ITestimonial } from "./shared.types";

export interface IPortfolio {
  _id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  image: IImage;
  displayImage: IImage;
  description: string;
  longDescription: string;
  tags: string[];
  results: string[];
  testimonial: ITestimonial;
}

export interface IPortfolioOverview {
  _id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  image: IImage;
  description: string;
  tags: string[];
}
