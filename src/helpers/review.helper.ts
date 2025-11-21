import { sanityFetch } from "@/sanity/lib/live";
import { reviewSchema } from "@/schema/review.schema";
import { IReview } from "@/types/main.types";
import z from "zod";

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

// const createReview = async (data: z.infer<typeof reviewSchema>) => {
//   try {

   
//     console.log(resp);


//   } catch (error) {
//     console.log("Error Creating Review :: ", error);
//     throw error;
//   }
// }

export {
  getReviews,
  // createReview
};
