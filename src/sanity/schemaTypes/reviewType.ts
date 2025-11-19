import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const reviewType = defineType({
    name: "review",
    title: "Client Reviews",
    type: "document",
    icon: StarIcon,
    fields: [
        defineField({
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1–5)',
            type: 'number',
            validation: Rule => Rule.min(1).max(5).required(),
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: "boolean",
            description: 'Only approved reviews show on the website',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "clientName",
            created: "_createdAt"
        },
        prepare({ title, created }) {
            return {
                title: title ?? "Client",
                subtitle: `Created: ${new Date(created).toLocaleString()}`
            };
        }
    }
})
