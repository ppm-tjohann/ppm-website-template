import { collectionApi, fetchApi } from '../index'
import { StrapiCollectionResponse, StrapiResponseData } from '../../interfaces/StrapiResponse'
import { Page } from '../../interfaces/Page'



interface SitemapPaths extends Omit<StrapiResponseData, 'attributes'> {
    attributes: {
        slug: string,
        updatedAt: string,
        seo: {
            preventIndexing: boolean | null
        } | null
    }
}

export const getSitemapPaths = async (): Promise<SitemapPaths[]> => {
    const pagesRes = await collectionApi( 'pages', {
        fields: [ 'slug', 'updatedAt' ],
        populate: [ 'seo.preventIndexing' ],
    } )
    return pagesRes.data
}

export const getPagesPaths = async (): Promise<StrapiResponseData[]> => {
    const pagesRes: StrapiCollectionResponse = await collectionApi( 'pages', {
        fields: [ 'name', 'slug', 'updatedAt' ],
    } )

    return pagesRes.data
}
export const getPagesData = async ( slug: string ): Promise<Page> => {
    const pagesRes = await fetchApi( 'pages', {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            seo: {
                populate: '*',
            },
            content: {
                populate: [
                    'page', 'buttons', 'buttons.internalLink',
                    'header', 'teaser', 'teaser.image',
                    'image', 'images',
                ],
            },
            teaser: {
                populate: '*',
            },
        },
    } )

    return pagesRes.data[0]

}