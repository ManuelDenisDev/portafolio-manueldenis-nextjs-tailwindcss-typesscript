import ButtonAtras from '@/components/iu/ButtonAtras'
import ButtonLink from '@/components/iu/ButtonLink'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'
import { VscArrowLeft } from 'react-icons/vsc'

const PageTrabajosDetalles = () => {
    return (
        <ContainerSection>
            <Container className="space-y-8">
                <ButtonAtras href="/trabajos" icono={VscArrowLeft} label="Atras" className="" />
                <div className="space-y-4">
                    <Titulo titulo="Peña Real Madrid Algeciras" />
                    <p className="font-extralight tracking-wide">
                        Sitio web oficial para la peña del equipo de futbol, Real Madrid, creada en
                        2023 en la ciudad ciudad de Algeciras por un grupo de seguidores del equipo
                        blanco con el fin de no perder la costumbre y tradicion de ver el futbol
                        entre amigos.
                    </p>
                </div>
                <ButtonLink href="https://realmadridalgeciras.framer.website/" label="Ver Web" />
            </Container>
        </ContainerSection>
    )
}

export default PageTrabajosDetalles
