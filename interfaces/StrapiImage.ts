interface StrapiImageFormat {
    ext: string,
    hash: string,
    height: number,
    mime: string,
    name: string,
    path: null,
    size: number,
    url: string,
    width: number

}

export interface StrapiImage {
    id: number,

    attributes: {
        alternativeText: string | null,
        caption: string | null,
        createdAt: string,
        ext: string,
        formats: {
            medium: StrapiImageFormat,
            small: StrapiImageFormat,
            thumbnail: StrapiImageFormat,
        }

        hash: string,
        height: number,
        mime: string,
        name: string,
        previewUrl: null,
        provider: string,
        provider_metadata: null,
        size: number,
        updatedAt: string,
        url: string,
        width: number

    }
}