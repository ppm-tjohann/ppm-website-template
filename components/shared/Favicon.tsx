import defaultFavicon from '../../public/ppm.png'
import Head from 'next/head'



const Favicon = () => {
    return (
      <Head>
          <link rel={'icon'} href={defaultFavicon.src}/>
      </Head>
    )
}
export default Favicon