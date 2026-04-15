import { sanityFetch } from "@/sanity/lib/live";
import { IReview } from "@/types/main.types";

const reviewFields = `{
    _id,
    clientName,
    feedback,
    rating,
    approved,
    approved,
    _createdAt,
    reviewedAt
}
`;
const getReviews = async () => {
  try {
    const { data } = await sanityFetch({
      query: `*[_type == "review" && approved == true]  ${reviewFields}`,
      perspective: "published",
    });
    const reviews = data as IReview[];
    return reviews ?? [];
  } catch (error) {
    console.log("Sanity Error :: ", error);
    throw error;
  }
};

export {
  getReviews,
};
