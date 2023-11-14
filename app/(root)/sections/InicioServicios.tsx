import ArticleCardServicios from '@/components/iu/ArticleCardServicios'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

const InicioServicios = () => {
    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Servicios" />
                <ArticleCardServicios className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10" />
            </Container>
        </ContainerSection>
    )
}

export default InicioServicios
