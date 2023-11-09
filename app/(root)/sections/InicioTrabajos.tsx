'use client'

import { useRouter } from 'next/navigation'

import Button from '@/components/iu/Button'
import CardTrabajos from '@/components/iu/CardTrabajos'
import Titulo from '@/components/iu/Titulo'
import ContainerSection from '@/components/iu/ContainerSection'
import Container from '@/components/iu/Container'

const InicioTrabajos = () => {
    const router = useRouter()

    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Trabajos" />
                <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                    <CardTrabajos
                        href="/trabajos-01"
                        imagen="https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp"
                        categoria="Landing Page"
                        titulo="Peña Real Madrid algeciras"
                    />
                    <CardTrabajos
                        href="/trabajos-02"
                        imagen="https://framerusercontent.com/images/VL1paRJcTdgdBftv6w0aff87XQQ.jpg?scale-down-to=512"
                        categoria="Sitio Web"
                        titulo="Elena Cibaja - Diseño de Interiores"
                    />
                    <CardTrabajos
                        href="/trabajos-03"
                        imagen="https://framerusercontent.com/images/KQp15xIkdDYP9w6se5eUh9Rq7Y.jpg?scale-down-to=512"
                        categoria="Tienda Online"
                        titulo="Estilo Vikingo"
                    />
                </article>
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
