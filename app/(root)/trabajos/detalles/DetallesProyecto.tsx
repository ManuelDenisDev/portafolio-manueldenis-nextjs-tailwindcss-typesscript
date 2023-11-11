import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import TituloDetalles from '@/components/iu/TituloDetalles'
import Image from 'next/image'

const DetallesProyecto = () => {
    return (
        <ContainerSection>
            <Container>
                <div className="space-y-8 md:flex md:space-y-0">
                    <header className="md:w-1/2">
                        <TituloDetalles titulo="Proyecto" />
                    </header>
                    <ul className="space-y-8 md:w-1/2">
                        <li className="space-y-2">
                            <h4 className="text-xl text-principalDark tracking-wide">Desafío</h4>
                            <p className="font-extralight tracking-wide">
                                Uno de los desafíos importantes fue lograr un equilibrio entre
                                presentar una gran variedad de contenido y mantener una interfaz
                                limpia y ordenada. El desafío era mejorar la capacidad de
                                descubrimiento del contenido y al mismo tiempo garantizar que los
                                usuarios no se sintieran abrumados por las opciones.
                            </p>
                        </li>
                        <li className="space-y-2">
                            <h4 className="text-xl text-principalDark tracking-wide">Resultado</h4>
                            <p className="font-extralight tracking-wide">
                                Los esfuerzos de colaboración y las decisiones de diseño estratégico
                                dieron como resultado un resultado exitoso: la duración promedio de
                                las sesiones y los artículos leídos por sesión experimentaron un
                                impresionante aumento del 50 % en los primeros dos meses posteriores
                                al lanzamiento.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <figure className="md:col-span-2 relative aspect-video overflow-hidden rounded">
                        <Image
                            className="absolute object-cover rounded hover:scale-110 transition-all duration-300"
                            src="https://framerusercontent.com/images/pEUN0stq29EUimZ6IDwPskT03I.webp"
                            alt="Imagen"
                            height={2769}
                            width={3312}
                        />
                    </figure>
                    <figure className="relative aspect-video overflow-hidden rounded">
                        <Image
                            className="absolute -bottom-1/2 object-cover rounded hover:scale-110 transition-all duration-300"
                            src="https://framerusercontent.com/images/hcsWc5YeRsUEEnWQqrgL7uxWnm8.webp"
                            alt="Imagen"
                            height={2769}
                            width={3312}
                        />
                    </figure>
                    <figure className="relative aspect-video overflow-hidden rounded">
                        <Image
                            className="absolute object-cover rounded hover:scale-110 transition-all duration-300"
                            src="https://framerusercontent.com/images/ESzlYVk7Ase9jtblDAKGBt8eqRo.webp"
                            alt="Imagen"
                            height={2769}
                            width={3312}
                        />
                    </figure>
                </div>
            </Container>
        </ContainerSection>
    )
}

export default DetallesProyecto
