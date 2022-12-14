import { button } from '../../interfaces/Shared'
import { Box, Button, Stack, SxProps } from '@mui/material'
import { useRouter } from 'next/router'
import { Theme } from '@mui/system'



interface ButtonProps {
    data: button[],
    sx?: SxProps<Theme>,

    [x: string]: any,
}

const ButtonStack = ( { data, ...props }: ButtonProps ) => {

    const router = useRouter()

    const handleClick = ( btn: button ) => () => {
        if ( btn.internalLink.data ) {
            router.push( btn.internalLink.data.attributes.slug )
        }
    }

    return (
      <Stack direction={'row'} spacing={3} {...props} sx={{
          py: 3,
          ...props.sx,
      }}>
          {data.map( btn => {
              return <Box key={btn.id}>
                  <Button variant={btn.variant} color={btn.color}
                          {...btn.externalLink ? { href: btn.externalLink, target: '_blank' } : {}}
                          {...btn.internalLink ? { onClick: handleClick( btn ) } : {}}
                  > {btn.name}</Button>
              </Box>
          } )
          }
      </Stack>
    )
}
export default ButtonStack