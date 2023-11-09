'use client'

import Image from 'next/image'
import Button from './Button'

interface CardServiciosProps {
    href: string
    imagen: string
    titulo: string
    descripcion: string
    precio: string
}

const CardServicios = ({ href, imagen, titulo, descripcion, precio }: CardServiciosProps) => {
    return (
        <a href={href} className="flex flex-col gap-8 group py-4">
            <figure className="relative w-14 h-14 rounded">
                <Image src={imagen} alt={'Foto del servicio' + titulo} fill />
            </figure>
            <figcaption className="flex flex-col gap-4">
                <h3 className="text-principalDark text-xl font-light tracking-wide group-hover:text-orange-400 transition-colors duration-300">
                    {titulo}
                </h3>
                <p>{descripcion}</p>
                {/* <Button type="button" label={precio} onClick={() => router.push('/trabajos')} /> */}
            </figcaption>
        </a>
    )
}

export default CardServicios
