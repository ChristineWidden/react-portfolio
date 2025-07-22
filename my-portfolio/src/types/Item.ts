
export type Item = {
    id: number;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    type: "project" | "job";
};
