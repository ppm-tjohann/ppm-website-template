import defaultLogo from '../../public/ppm.png'
import NextImage from 'next/image'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import Favicon from './Favicon'



const Logo = () => {

    const router = useRouter()
    const handleHome = () => {
        router.push( '/' )
    }

    return ( <>
          <Favicon/>
          <Box sx={{ py: 1, cursor: 'pointer' }} onClick={handleHome}>
              <NextImage src={defaultLogo} alt={'Powerpress medien'} objectFit={'contain'} height={50}/>
          </Box>
      </>
    )
}
export default Logo