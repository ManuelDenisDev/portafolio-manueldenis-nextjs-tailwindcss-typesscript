import Link from 'next/link'
import Image from 'next/image'

interface CardTrabajosProps {
    href: string
    imagen: string
    categoria: string
    titulo: string
}

const CardTrabajos = ({ href, imagen, categoria, titulo }: CardTrabajosProps) => {
    return (
        <Link href={href} className="flex flex-col gap-2 group">
            <div className="relative aspect-video overflow-hidden rounded">
                <Image
                    src={imagen}
                    alt={titulo}
                    fill
                    className="absolute object-cover rounded group-hover:scale-110 transition-all duration-300"
                />
            </div>
            <h5 className="text-xs uppercase tracking-wide">{categoria}</h5>
            <h3 className="text-xl text-principalDark font-light group-hover:text-orange-400 transition-colors duration-300">
                {titulo}
            </h3>
        </Link>
    )
}

export default CardTrabajos
