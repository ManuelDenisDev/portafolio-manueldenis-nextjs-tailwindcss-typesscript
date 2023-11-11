'use client'

import Button from '@/components/iu/Button'
import CardBlogs from '@/components/iu/CardBlogs'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

import { useRouter } from 'next/navigation'

const InicioBlogs = () => {
    const router = useRouter()

    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Blogs" />
                <article className="space-y-8">
                    <CardBlogs
                        href="/blogs/blog-01"
                        imagen="https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?scale-down-to=512"
                        titulo="¿Qué pasos he de seguir para diseñar mi web o tienda online?"
                        categoria="diseño web"
                        fecha="7 de Enero de 2024"
                    />
                    <CardBlogs
                        href="/blogs/blog-01"
                        imagen="https://framerusercontent.com/images/ErzMHG3Pd5Gk6RDm2eAFB93ihY.jpg?scale-down-to=512"
                        titulo="¿Qué necesito para diseñar mi web?"
                        categoria="diseño web"
                        fecha="14 de Enero de 2024"
                    />
                    <CardBlogs
                        href="/blogs/blog-01"
                        imagen="https://framerusercontent.com/images/Oj7IkTyPVB0eMk0EbluNfbb6ZcI.jpg?scale-down-to=512"
                        titulo="¿Qué necesito para diseñar mi tienda online?"
                        categoria="diseño web"
                        fecha="21 de Enero de 2024"
                    />
                </article>
                <Button label="Todos los blogs" onClick={() => router.push('/blogs')} />
            </Container>
        </ContainerSection>
    )
}

export default InicioBlogs
