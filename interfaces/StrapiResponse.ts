export interface StrapiMetaResponse {
    pagination: {
        page: number, pageSize: number, pageCount: 1, total: number
    }
}

export interface StrapiSingleResponse {
    data: StrapiResponseData,
    meta: StrapiMetaResponse,

}

export interface StrapiCollectionResponse {
    data: StrapiResponseData[],
    meta: StrapiMetaResponse
}

export interface StrapiResponseData {
    id: number,
    attributes: any,
}
