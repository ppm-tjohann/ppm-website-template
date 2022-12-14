import { Box, Container, Stack } from '@mui/material'
import Logo from '../components/shared/Logo'



const PageHeader = () => {

    return (
      <Box component={'header'}>
          <Container>
              <Stack>
                  <Logo/>
              </Stack>
          </Container>
      </Box>
    )
}
export default PageHeader