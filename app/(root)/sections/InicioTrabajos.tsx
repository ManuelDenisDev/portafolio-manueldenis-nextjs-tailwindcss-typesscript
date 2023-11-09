'use client'

import { useRouter } from 'next/navigation'

import Button from '@/components/iu/Button'
import Titulo from '@/components/iu/Titulo'
import ContainerSection from '@/components/iu/ContainerSection'
import Container from '@/components/iu/Container'
import ArticleCardTrabajos from '@/components/iu/ArticleCardTrabajos'

const InicioTrabajos = () => {
    const router = useRouter()

    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Trabajos" />
                <ArticleCardTrabajos />
                <Button
                    type="button"
                    label="Todos los trabajos"
                    onClick={() => router.push('/trabajos')}
                />
            </Container>
        </ContainerSection>
    )
}

export default InicioTrabajos
