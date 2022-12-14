import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageLoader from '../components/PageLoader'
import { getPagesPaths, getPagesData } from '../api/collections/pageCollection'
import getSlug from '../lib/getSlug'
import { Page } from '../interfaces/Page'

import Seo from '../globals/Seo'
import BlockManager from '../blocks/BlockManager'



interface PageProps {
    pageData: Page,
}

const Page = ( { pageData }: PageProps ) => {
    const router = useRouter()

    console.log( 'PageData:', pageData )

    if ( router.isFallback ) {
        return <PageLoader/>
    }

    return <>
        <Seo pageSeo={pageData.attributes.seo}/>
        <BlockManager blocks={pageData.attributes.content}/>
    </>

}

export const getStaticPaths: GetStaticPaths = async () => {

    const pathsRes = await getPagesPaths()

    const paths = pathsRes.map( path => {
        const slug = path.attributes.slug ?? ''
        return ( { params: { slug: [ slug ] } } )
    } )

    return {
        paths: paths,
        fallback: true,
    }
}
export const getStaticProps: GetStaticProps = async ( { params } ) => {

    let slug = getSlug( params )
    if ( slug ) slug = '/'
    const pageRes = await getPagesData( slug )

    //TODO check if undefined and redirect to 404

    console.log( 'PageRes :', pageRes )

    return {
        props: {
            pageData: pageRes,
        },
        revalidate: 10,
    }
}

export default Page