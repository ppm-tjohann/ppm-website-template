import { Page } from '../../interfaces/Page'
import { Grid, Box, Container, Typography } from '@mui/material'
import Section from '../../components/Section'



interface SingleTeaserProps {
    page?: Page,
}

const SingleTeaser = ( { page }: SingleTeaserProps ) => {

    console.log( 'Page :', page )

    return (
      <Section>
          <Container>
              <Grid container>
                  <Grid item xs={12} md={6}>
                      <Typography variant={'h1'}>Single Teaser</Typography>
                  </Grid>
              </Grid>
          </Container>
      </Section>
    )
}
export default SingleTeaser