import ArticleCardTrabajos from '@/components/iu/ArticleCardTrabajos'
import Container from '@/components/iu/Container'
import ContainerHeader from '@/components/iu/ContainerHeader'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

const PageTrabajos = () => {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <Titulo titulo="Trabajos" />
                </Container>
            </ContainerHeader>
            <ContainerSection>
                <Container>
                    <ArticleCardTrabajos />
                </Container>
            </ContainerSection>
        </>
    )
}

export default PageTrabajos
