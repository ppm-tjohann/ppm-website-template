import { ContentProps } from '../../interfaces/Page'
import { Container } from '@mui/material'
import Section from '../../components/Section'
import ButtonStack from '../../components/shared/Buttons'
import Header from '../../components/shared/Header'
import RichText from '../../components/RichText'



const Content = ( { buttons, header, text }: ContentProps ) => {
    return <Section>
        <Container>
            {header && <Header data={header}/>}
            <RichText>{text}</RichText>
            <ButtonStack data={buttons}/>

        </Container>
    </Section>
}
export default Content