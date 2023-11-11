import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import TituloDetalles from '@/components/iu/TituloDetalles'
import Image from 'next/image'

const DetallesRol = () => {
    return (
        <ContainerSection>
            <Container>
                <div className="space-y-8 md:flex md:space-y-0">
                    <header className="md:w-1/2">
                        <TituloDetalles titulo="Rol" />
                    </header>
                    <ul className="space-y-8 md:w-1/2">
                        <li className="space-y-2">
                            <h4 className="text-xl text-principalDark tracking-wide">
                                Responsabilidades
                            </h4>
                            <p className="font-extralight tracking-wide">
                                Como diseñador principal de productos, mis responsabilidades
                                abarcaban todo el ciclo de vida del diseño, desde la investigación
                                del usuario hasta el diseño visual y la experiencia del usuario.
                            </p>
                        </li>
                        <li className="space-y-2">
                            <h4 className="text-xl text-principalDark tracking-wide">
                                Colaboración
                            </h4>
                            <p className="font-extralight tracking-wide">
                                La colaboración fue vital para crear un producto cohesivo y exitoso.
                                Trabajé en estrecha colaboración con desarrolladores, gerentes de
                                producto y creadores de contenido.
                            </p>
                        </li>
                    </ul>
                </div>
                <figure className="relative aspect-video overflow-hidden rounded">
                    <Image
                        className="absolute -top-1/2 object-cover rounded hover:scale-110 transition-all duration-300"
                        src="https://framerusercontent.com/images/QYdp7x46m3LB8NAvPjLQpxcAQ.webp"
                        alt="Imagen"
                        height={2769}
                        width={3312}
                    />
                </figure>
            </Container>
        </ContainerSection>
    )
}

export default DetallesRol
