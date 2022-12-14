import { ReactNode } from 'react'
import { Box, SxProps } from '@mui/material'
import { Theme } from '@mui/system'



interface SectionProps {
    children: ReactNode,
    sx?: SxProps<Theme>,

    [x: string]: any,
}

const Section = ( { children, ...props }: SectionProps ) => {
    return ( <Box component={'section'}
                  {...props}
                  sx={{
                      //@ts-ignore
                      py: props.sx?.backgroundColor ? 6 : 3,
                      ...props.sx,
                  }}>{children}</Box> )
}
export default Section