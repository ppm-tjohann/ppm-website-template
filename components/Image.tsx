import { StrapiImage } from '../interfaces/StrapiImage'
import NextImage from 'next/image'
import { Box } from '@mui/material'
import { getStrapiMedia, getStrapiThumbnail } from '../lib/media'



interface ImageProps {
    data: StrapiImage,
    boxHeight?: string | number,

    [x: string]: any,
}

const Image = ( { data, ...props }: ImageProps ) => {

    const { alternativeText, width, height } = data.attributes

    console.log( 'Image: ', props.boxHeight ?? '100%' )

    return <Box
      className={'image-container'}
      sx={{
          position: 'absolute', width: '100%', height: '100%',
          
      }}>
        <NextImage
          alt={alternativeText ?? ''}
          src={getStrapiMedia( data )}
          placeholder={'blur'}
          blurDataURL={getStrapiThumbnail( data )}
          layout={'fill'}
          objectFit={'cover'}
          {...props}
        />
    </Box>

}
export default Image