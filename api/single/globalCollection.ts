import { fetchApi, singleApi } from '../index'
import { Global } from '../../interfaces/Global'



export const getGlobalData = async (): Promise<Global> => {
    const globalRes = await singleApi( 'global', {
        populate: {
            defaultSeo: {
                populate: '*',
            },
        },
    } )
    console.log( 'GlobalRes: ', globalRes.data )
    return globalRes.data
}