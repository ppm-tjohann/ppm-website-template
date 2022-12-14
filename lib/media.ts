import { getStrapiUrl } from '../api'
import { StrapiImage } from '../interfaces/StrapiImage'



export const getLink = ( url: string ) => {
    if ( url.startsWith( '/' ) )
        return getStrapiUrl( url )

    if ( url.startsWith( 'https://' ) )
        return url

    return `https://${url}`
}

export const getStrapiMedia = ( media: StrapiImage ) => getLink( media.attributes.url )
export const getStrapiThumbnail = ( media: StrapiImage ) => getLink( media.attributes.formats.thumbnail.url )

