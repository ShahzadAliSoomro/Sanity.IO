import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "o8l7uk7j",
    dataset: "production",
    apiVersion: "2022-03-10",
    useCdn: false,
})