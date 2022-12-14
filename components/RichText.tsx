import { ElementType } from 'react'
import { Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'



interface RichTextProps {
    children: string,
    variant?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit',
    component?: ElementType,

    [x: string]: any,
}

const RichText = ( { children, variant = 'body1', component = 'div', ...props }: RichTextProps ) => {
    return (
      <Typography variant={variant} component={component} {...props}>
          <ReactMarkdown>{children}</ReactMarkdown>
      </Typography>
    )

}
export default RichText