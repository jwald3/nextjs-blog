import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production",
};

// set up client for fetching data in getProps page funcs
export const sanityClient = createClient(config);

// extract image url from asset
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
