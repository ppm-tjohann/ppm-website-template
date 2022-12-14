import Seo from './Seo'
import { StrapiResponseData } from './StrapiResponse'



interface GlobalAttributes {
    logo: {},
    favicon: {},
    defaultSeo: Seo,
}

export interface Global extends Omit<StrapiResponseData, 'attributes'> {
    attributes: GlobalAttributes,
}