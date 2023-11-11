import { VscArrowLeft } from 'react-icons/vsc'

import ContainerMain from '@/components/iu/ContainerMain'
import Container from '@/components/iu/Container'
import ButtonAtras from '@/components/iu/ButtonAtras'

import DetallesHeader from './DetallesHeader'
import DetallesRol from './DetallesRol'
import DetallesProyecto from './DetallesProyecto'

export const metadata = {
    title: 'Trabajos Detalles',
    description: 'Trabajos Detalles',
}

const PageTrabajosDetalles = () => {
    return (
        <ContainerMain>
                <DetallesHeader />
                <DetallesRol />
                <DetallesProyecto />
        </ContainerMain>
    )
}

export default PageTrabajosDetalles
