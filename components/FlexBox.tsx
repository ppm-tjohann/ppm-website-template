import * as React from 'react'
import { Box, SxProps } from '@mui/material'
import { Theme } from '@mui/system'



type FlexBoxProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>,
    [s: string]: any,

}

const FlexBox = ( { children, ...props }: FlexBoxProps ) => {
    return (
      <Box
        className={'flexBox'}
        {...props} sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ...props.sx,
      }}>
          {children}
      </Box>
    )
}

export default FlexBox
