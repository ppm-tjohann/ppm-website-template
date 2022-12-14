import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
import { getSitemapPaths } from '../api/collections/pageCollection'



export const getServerSideProps: GetServerSideProps = async ( ctx ) => {

    const {
        WEBSITE_URL = 'test-link',
    } = process.env

    const getPath = ( slug: string ) => {
        let url = ''
        if ( slug === '/' ) {
            url = `${WEBSITE_URL}`
        }
        else url = `${WEBSITE_URL}/${slug}`
        return url.replace( '//', '/' )
    }

    const pathsRes = await getSitemapPaths()
    const filteredPaths = pathsRes.filter( path => ( path.attributes.seo === null || !path.attributes.seo.preventIndexing ) )
    
    const paths = filteredPaths.map( path => ( {
        loc: getPath( path.attributes.slug ),
        priority: 0.7,
        changefreg: 'daily',
        lastMod: path.attributes.updatedAt,
    } ) )
    console.log( 'Paths :', paths )

    return getServerSideSitemap( ctx, paths )

}

export default function SitemapXml() {
}
