import { Container, CircularProgress } from '@mui/material'
import FlexBox from './FlexBox'



const PageLoader = () => {
    return (
      <Container sx={{
          py: 3,
      }}>
          <FlexBox>
              <CircularProgress/>
          </FlexBox>
      </Container>

    )

}
export default PageLoader