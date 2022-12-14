import { ParsedUrlQuery } from 'querystring'



const getSlug = ( params: ParsedUrlQuery | undefined ): string => {

    if ( params === undefined || params.slug === null || params.slug === undefined ) {
        return '/'
    }

    let slug = ''

    if ( typeof params.slug === 'string' ) {
        return params.slug
    }

    params.slug.forEach( param => {
        slug += `/${param}`
    } )

    // removing leading slash
    return slug.replace( '/', '' )

}
export default getSlug