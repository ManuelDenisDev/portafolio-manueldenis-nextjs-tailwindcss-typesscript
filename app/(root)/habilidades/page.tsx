import Container from '@/components/iu/Container'
import ContainerHeader from '@/components/iu/ContainerHeader'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'
import TituloDetalles from '@/components/iu/TituloDetalles'

import Node from '@/public/images/logos/node-js.svg'

import ListHabilidades from '@/components/iu/ListHabilidades'

const PageHabilidades = () => {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <Titulo titulo="Habilidades" />
                </Container>
            </ContainerHeader>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Front-End" />
                    <ListHabilidades />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Back-End" />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Database" />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Dev-Ops" />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Mobile-App" />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="Product-Desginer" />
                </Container>
            </ContainerSection>
            <ContainerSection>
                <Container>
                    <TituloDetalles titulo="CMS" />
                </Container>
            </ContainerSection>
        </>
    )
}

export default PageHabilidades
