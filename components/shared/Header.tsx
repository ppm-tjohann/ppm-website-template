import { Box, SxProps, Typography } from '@mui/material'
import { header } from '../../interfaces/Shared'
import { Theme } from '@mui/system'



interface HeaderProps {
    data: header,
    sx?: SxProps<Theme>,

    [x: string]: any,
}

const Header = ( { data, ...props }: HeaderProps ) => {

    console.log( 'Header Data :', data )
    
    const { overline, headline, subline, component, variant = 'h2' } = data
    return (
      <Box {...props} sx={{
          py: 3,
          ...props.sx,
      }}>
          {overline && <Typography variant={'overline'}>{overline}</Typography>}
          <Typography variant={variant} component={component}>{headline}</Typography>
          {subline && <Typography variant={'subtitle1'}>{subline}</Typography>}
      </Box>
    )
}
export default Header