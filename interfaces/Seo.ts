interface customTag {
    name: string | null,
    content: string | null,
}

export default interface Seo {
    id: number,
    metaTitle: string | null,
    metaDescription: string | null,
    structuredData: Object | null,
    preventIndexing: boolean,
    customTags: customTag[],
}