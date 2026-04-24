import { urlFor } from "@/sanity/lib/image";

export const getPreviewImageUrl = (source: string) => {
  return urlFor(source).quality(80).url();
};

export const getHeroImageUrl = (source: string) => {
  return urlFor(source).quality(80).url();
};
