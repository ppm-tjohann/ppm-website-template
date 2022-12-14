import qs from 'qs'
import { StrapiCollectionResponse, StrapiSingleResponse } from '../interfaces/StrapiResponse'



const {
    WEBSITE_URL = 'http://localhost:1337',
} = process.env

export const getStrapiUrl = ( path: string = '' ) => `${WEBSITE_URL}${path}`

export const collectionApi = async ( path: string, urlParams = {}, options = {} ): Promise<StrapiCollectionResponse> =>
  await fetchApi( path, urlParams, options )
export const singleApi = async ( path: string, urlParams = {}, options = {} ): Promise<StrapiSingleResponse> =>
  await fetchApi( path, urlParams, options )

export const fetchApi = async ( path: string, urlParams = {}, options = {} ): Promise<any> => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const mergedOptions = {
        ...defaultOptions,
        ...options,
    }

    const query = qs.stringify( urlParams )
    const requestUrl = `${getStrapiUrl( `/api/${path}${query ? '?' + query : ''}` )}`

    console.log( 'Requesting', path )
    console.log( 'Requesting on : ', requestUrl )

    const response = await fetch( requestUrl, mergedOptions )

    if ( !response.ok ) {
        throw new Error( `Api fetch failed at ${path}` )
    }

    return await response.json()
}

