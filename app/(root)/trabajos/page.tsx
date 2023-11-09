import ArticleCardTrabajos from '@/components/iu/ArticleCardTrabajos'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

const PageTrabajos = () => {
    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Trabajos" />
                <ArticleCardTrabajos />
            </Container>
        </ContainerSection>
    )
}

export default PageTrabajos
