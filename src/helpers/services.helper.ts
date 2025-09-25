import { sanityFetch } from "@/sanity/lib/live";
import { IService } from "@/types/main.types";


const serviceFields = `{
    title,
    shortDescription,
    "slug":slug.current,
    cardIcon,
    serviceImage{
    alt,
      "source": asset._ref
    },
    body
}`;

const getServices = async () => {
    try {
        const { data } = await sanityFetch({
            query: `*[_type == "service"] ${serviceFields}`,
            perspective: "published"
        })
        const services = data as IService[]
        return services ?? []
    } catch (error) {
        console.log("Sanity Error :: ", error);
        throw error;
    }
}


const getService = async (slug: string) => {
    try {
        const { data } = await sanityFetch({
            query: `*[_type == "service" && slug.current == $slug][0] ${serviceFields}`,
            params: { slug }
        })
        if (!data) return null;

        return data as IService

    } catch (error) {
        console.log("Sanity Error :: ", error);
        throw error;
    }
}

export {
    getService,
    getServices
}