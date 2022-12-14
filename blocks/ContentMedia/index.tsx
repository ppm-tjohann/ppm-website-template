import { ContentMediaProps } from '../../interfaces/Page'
import Section from '../../components/Section'
import { Box, Container, Grid } from '@mui/material'
import Header from '../../components/shared/Header'
import ImageHandler from '../../components/ImageHandler'
import RichText from '../../components/RichText'
import ButtonStack from '../../components/shared/Buttons'



const ContentMedia = ( { images, textPosition, background, header, text, buttons }: ContentMediaProps ) => {

    const contentIsRight = textPosition === 'right'

    const order = {
        right: 0,
        left: 1,
    }

    return (
      <Section sx={{ backgroundColor: `${background}.main` }}>
          <Container>
              <Grid container alignItems={'center'}>
                  <Grid item xs={12} md={6} order={{ xs: 0, md: contentIsRight ? order.left : order.right }}>
                      <Box>
                          <ImageHandler images={images.data}/>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} order={{ xs: 0, md: contentIsRight ? order.right : order.left }}>
                      <Box>
                          {header && <Header data={header}/>}
                          <RichText>{text}</RichText>
                          <ButtonStack data={buttons}/>
                      </Box>
                  </Grid>
              </Grid>
          </Container>
      </Section>
    )

}
export default ContentMedia