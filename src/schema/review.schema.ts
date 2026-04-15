import z from "zod";

export const reviewSchema = z.object({
  clientName: z
    .string({ error: "Client Name is required." })
    .min(1, { error: "Client Name cannot be empty." }),

  rating: z
    .coerce
    .number({ error: "Rating is required." })
    .min(1, { error: "Rating must be at least 1." })
    .max(5, { error: "Rating cannot exceed 5." }),

  feedback: z
    .string({ error: "Feedback is required." })
    .min(20, { error: "Feedback must be at least 20 characters long." })
    .max(100, { error: "Feedback should be within 100 characters." }),
});
