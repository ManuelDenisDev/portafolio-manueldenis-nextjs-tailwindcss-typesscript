import CardServicios from '@/components/iu/CardServicios'
import Container from '@/components/iu/Container'
import ContainerHeader from '@/components/iu/ContainerHeader'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

const PageServicios = () => {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <Titulo titulo="Servicios" />
                </Container>
            </ContainerHeader>
            <ContainerSection>
                <Container>
                    <CardServicios
                        href="/"
                        imagen="https://framerusercontent.com/images/asSnXTpbloEzEwWxiy8QxOVsJxM.svg"
                        titulo="Landing Page"
                        descripcion="La meta principal de una landing page es la conversión, es decir, buscamos que los visitantes realicen acciones específicas, como suscribirse a una lista de correo, solicitar un presupuesto, agendar una cita gratuita o descargar una guía."
                    />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <CardServicios
                        href="/"
                        imagen="https://framerusercontent.com/images/cP1ggFAijMP3KbQH9lgJ1E1iY.svg"
                        titulo="Web Basic"
                        descripcion="Es la mejor opción si necesitas una presencia online estéticamente impecable y un plan SEO básico para empezar."
                    />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <CardServicios
                        href="/"
                        imagen="https://framerusercontent.com/images/j1lb2OAfQQJC6MTGWnIwnAXtaM.svg"
                        titulo="Web Premium"
                        descripcion="Esta opción es la elección ideal si buscas una presencia online que no solo sea visualmente atractiva, sino que también ofrezca una amplia gama de características adicionales (reservas, calendario de eventos, varios idiomas, boletines de noticias...)."
                    />
                </Container>
            </ContainerSection>
        </>
    )
}

export default PageServicios
