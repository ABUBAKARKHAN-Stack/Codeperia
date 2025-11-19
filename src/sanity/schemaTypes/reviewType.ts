import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const reviewType = defineType({
  name: "review",
  title: "Client Reviews",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5).required(),
    }),
    defineField({
      name: "feedback",
      title: "Feedback",
      type: "string",
      validation: (Rule) =>
        Rule.error("Feedback is required")
          .min(20)
          .error("Feedback must be at least 20 characters long")
          .max(100)
          .error("Feedback should be within 100 characters"),
    }),
    defineField({
      name: "reviewedAt",
      title: "Reviewed At",
      type: "datetime",
    }),
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Only approved reviews show on the website",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      created: "_createdAt",
      reviewedAt: "reviewedAt",
    },
    prepare({ title, created, reviewedAt }) {
      return {
        title: title ?? "Client",
        subtitle: `Created: ${new Date(reviewedAt ?? created).toLocaleString()}`,
      };
    },
  },
});
