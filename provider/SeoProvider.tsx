import { ReactNode, createContext } from 'react'
import Seo from '../interfaces/Seo'



export const SeoContext = createContext( {} as Seo )

interface SeoProviderProps {
    children: ReactNode,
    seoData: Seo,
}

const SeoProvider = ( { children, seoData }: SeoProviderProps ) => {
    return ( <SeoContext.Provider value={seoData}>
        {children}
    </SeoContext.Provider> )

}
export default SeoProvider