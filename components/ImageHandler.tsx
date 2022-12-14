import { StrapiImage } from '../interfaces/StrapiImage'
import Image from './Image'
import ImageSlider from './ImageSlider'
import { Box } from '@mui/material'



interface ImageHandlerProps {
    images: StrapiImage[],

    [x: string]: any,
}

const ImageHandler = ( { images, ...props }: ImageHandlerProps ) => {

    console.log( 'Data :', images )

    if ( images.length === 0 ) {
        return null
    }

    if ( images.length === 1 ) {
        return <Box sx={{ position: 'relative', width: '100%', pb: '100%' }}>
            <Image data={images[0]} {...props}/>
        </Box>
    }

    return <ImageSlider images={images} {...props}/>
}
export default ImageHandler