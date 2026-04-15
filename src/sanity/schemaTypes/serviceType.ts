import { MdBuild } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: MdBuild,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("Service Title is required")
          .min(5)
          .error("Title must be at least 5 characters long")
          .max(100)
          .error("Title must not exceed 100 characters"),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("Service description is required")
          .min(50)
          .error("Description must be at least 50 characters long")
          .max(150)
          .error("Description must not exceed 150 characters"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Service Slug is required"),
    }),
    defineField({
      name: "cardIcon",
      title: "Card Icon",
      type: "string",
      options: {
        list: [
          { title: "Web Development Icon", value: "LayoutTemplate" },
          { title: "App Development Icon", value: "Smartphone" },
          { title: "Full Stack Development Icon", value: "Layers3" },
          { title: "E-Commerce (Cart) Icon", value: "ShoppingCart" },
          { title: "UI/UX (Paint Brush) Icon", value: "Paintbrush" },
          { title: "DevOps & Automation (Server) Icon", value: "ServerCog" },
        ],

        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Card Icon is required"),
    }),
    defineField({
      name: "serviceImage",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.required().error(
              "Alternative text is required for accessibility",
            ),
        }),
      ],
      validation: (Rule) => Rule.required().error("Service image is required"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Post body content is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "serviceImage",
    },
  },
});
