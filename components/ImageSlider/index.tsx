import { StrapiImage } from '../../interfaces/StrapiImage'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Box } from '@mui/material'
import FlexBox from '../FlexBox'
import Image from '../Image'



interface ImageSliderProps {
    images: StrapiImage[],

    [x: string]: any,
}

const ImageSlider = ( { images, ...props }: ImageSliderProps ) => {

    const sliderOptions = {
        type: 'slide', arrows: false,
        autoplay: true,
        rewind: true,
        displayArrows: false,
    }

    return (
      <Box>
          <Splide options={sliderOptions}>
              {images.map( ( image, index ) => (
                <SplideSlide key={image.id}>
                    <Box sx={{
                        position: 'relative', width: '100%', pb: '100%', bg: 'green',
                    }}>
                        <FlexBox sx={{
                            position: 'absolute', width: '100%', height: '100%',
                            backgroundColor: 'primary.main',
                        }}>
                            <Image data={image}/>
                        </FlexBox>
                    </Box>
                </SplideSlide>
              ) )}
          </Splide>
      </Box>
    )

}
export default ImageSlider