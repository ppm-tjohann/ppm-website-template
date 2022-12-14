import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from 'next/app'
import { getGlobalData } from '../api/single/globalCollection'
import { Global } from '../interfaces/Global'
import SeoProvider from '../provider/SeoProvider'
import { ThemeProvider } from '@mui/material'
import theme from '../lib/theme'

// Slider theme
import '@splidejs/react-splide/css'
import PageHeader from '../globals/PageHeader'



interface MyAppProps extends AppProps {
    globalContext: Global,
}

export default function MyApp( { Component, pageProps, globalContext }: MyAppProps ) {

    console.log( 'GlobalContext:', globalContext.attributes )

    return <ThemeProvider theme={theme}>
        <SeoProvider seoData={globalContext.attributes.defaultSeo}>
            <PageHeader/>
            <Component {...pageProps} />
        </SeoProvider>
    </ThemeProvider>
}

MyApp.getInitialProps = async ( ctx: any ) => {
    const appProps = await App.getInitialProps( ctx )

    const [ globalProps ] = await Promise.all( [
        getGlobalData(),
    ] )
    return {
        ...appProps,
        globalContext: { ...globalProps },
    }
}
