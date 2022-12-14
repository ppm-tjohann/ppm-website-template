import { Box, Container, Typography } from '@mui/material'
import FlexBox from '../components/FlexBox'
import { ContentBlocks, DefaultProps } from '../interfaces/Page'
import Content from './Content'
import Video from './Video/Video'
import ContentMedia from './ContentMedia'
import SingleTeaser from './SingleTeaser'



const DefaultBlock = ( { __component }: DefaultProps ) => {
    return (
      <Container sx={{ py: 3 }}>
          <FlexBox>
              <Typography variant={'button'} textAlign={'center'}> Default Block – {__component.replace( 'blocks.', '' )}</Typography>
          </FlexBox>
      </Container>
    )
}

const getBlockComponent = ( { __component, ...rest }: ContentBlocks, index: number ) => {

    let Block

    switch ( __component ) {
        case 'blocks.content':
            Block = Content
            break
        case 'blocks.video':
            Block = Video
            break
        case 'blocks.content-media':
            Block = ContentMedia
            break
        case 'blocks.single-teaser':
            Block = SingleTeaser
            break
        default:
            Block = DefaultBlock
    }
//@ts-ignore
    return <Block {...rest} __component={__component} key={index}/>

}

interface BlockManagerProps {
    blocks: ContentBlocks[]
}

const BlockManager = ( { blocks }: BlockManagerProps ) => {

    console.log( 'Blocks :', blocks )

    return ( <Box>
        {blocks.map( getBlockComponent )}
    </Box> )

}
export default BlockManager