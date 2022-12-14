import { useContext } from 'react'
import { SeoContext } from '../provider/SeoProvider'
import Head from 'next/head'
import Seo from '../interfaces/Seo'



interface SeoProps {
    pageSeo: Seo,
}

const Seo = ( { pageSeo }: SeoProps ) => {

    const defaultSeo = useContext( SeoContext )
    console.log( 'Page Seo :', pageSeo )

    const { metaTitle, metaDescription, customTags, preventIndexing } = {
        ...defaultSeo,
        ...pageSeo,
    }

    console.log( 'Seo: ', {
        metaTitle, metaDescription, customTags, preventIndexing,
    } )

    return (
      <Head>
          <title>{metaTitle}</title>
          {metaDescription && <meta name={'description'} content={metaDescription}/>}
          {metaTitle && <meta property="og:title" content={metaTitle} key="og:title"/>}


          {customTags.map( ( meta, index ) => <meta key={index} name={meta.name ?? undefined} content={meta.content ?? undefined}/> )}

          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twitter:card"
          />
          {metaDescription &&
          <meta
              property="og:description"
              content={metaDescription}
              key="og:description"
          />}
          {
              preventIndexing && (
                <>
                    <meta name={'robots'} content={'noindex'}/>
                    <meta name={'googlebot'} content={'noindex'}/>
                </>
              )
          }

      </Head>
    )
}
export default Seo