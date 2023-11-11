import { VscArrowLeft } from 'react-icons/vsc'

import ContainerDiv from '@/components/iu/ContainerDiv'
import Container from '@/components/iu/Container'
import ButtonAtras from '@/components/iu/ButtonAtras'
import Titulo from '@/components/iu/Titulo'
import ButtonLink from '@/components/iu/ButtonLink'
import Image from 'next/image'

const DetallesHeader = () => {
    return (
        <ContainerDiv className="space-y-8">
            <Container>
                <ButtonAtras href="/trabajos" icono={VscArrowLeft} label="Atras" className="" />
                <header className="flex items-left justify-between md:gap-8 xl:gap-16 space-y-8 flex-col md:flex-row">
                    <div className="space-y-8 md:w-2/3">
                        <div className="space-y-4">
                            <Titulo titulo="Peña Real Madrid Algeciras" />
                            <p className="font-extralight tracking-wide">
                                Sitio web oficial para la peña del equipo de futbol, Real Madrid,
                                creada en 2023 en la ciudad ciudad de Algeciras por un grupo de
                                seguidores del equipo blanco con el fin de no perder la costumbre y
                                tradicion de ver el futbol entre amigos.
                            </p>
                        </div>
                        <ButtonLink
                            href="https://realmadridalgeciras.framer.website/"
                            label="Ver Web"
                            className="text-principalDark md:w-40"
                        />
                    </div>
                    <ul className="md:w-1/3 space-y-2 font-extralight">
                        <li className="relative ml-16 before:absolute before:w-2 before:h-2 before:border before:border-orange-400 before:-left-8 before:top-1/2 before:-translate-y-1/2">
                            Categoria: Todo en 1
                        </li>
                        <li className="relative ml-16 before:absolute before:w-2 before:h-2 before:border before:border-orange-400 before:-left-8 before:top-1/2 before:-translate-y-1/2">
                            Duracion: 1 mes
                        </li>
                        <li className="relative ml-16 before:absolute before:w-2 before:h-2 before:border before:border-orange-400 before:-left-8 before:top-1/2 before:-translate-y-1/2">
                            Product Design
                        </li>
                    </ul>
                </header>
                <div className="rounded">
                    <Image
                        src="https://framerusercontent.com/images/YqUXyuKZSiF1WVYqsRcbAFsZDw.webp"
                        alt="Imagen"
                        width={4272}
                        height={2848}
                        className="w-full rounded"
                    />
                </div>
            </Container>
        </ContainerDiv>
    )
}

export default DetallesHeader
