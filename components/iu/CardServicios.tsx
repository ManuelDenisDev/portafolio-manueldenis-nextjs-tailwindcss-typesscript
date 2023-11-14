'use client'

import { cn } from '@/libs/utils'
import Image from 'next/image'

interface CardServiciosProps {
    className?: string
    href: string
    imagen: string
    titulo: string
    descripcion: string
}

const CardServicios = ({ className, href, imagen, titulo, descripcion }: CardServiciosProps) => {
    return (
        <a href={href} className={cn('flex flex-col gap-8 group py-4', className)}>
            <figure className="relative w-14 h-14 rounded">
                <Image src={imagen} alt={'Foto del servicio' + titulo} fill />
            </figure>
            <figcaption className="flex flex-col gap-4">
                <h3 className="text-principalDark text-xl font-light tracking-wide group-hover:text-orange-400 transition-colors duration-300">
                    {titulo}
                </h3>
                <p>{descripcion}</p>
            </figcaption>
        </a>
    )
}

export default CardServicios
