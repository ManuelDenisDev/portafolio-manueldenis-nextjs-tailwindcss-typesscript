import Link from 'next/link'
import Image from 'next/image'

interface CardBlogsProps {
    href: string
    imagen: string
    categoria: string
    titulo: string
    fecha: string
}

const CardBlogs = ({ href, imagen, categoria, titulo, fecha }: CardBlogsProps) => {
    return (
        <Link href={href} className="group flex gap-4 flex-col lg:flex-row">
            <div className="relative w-64 aspect-video overflow-hidden rounded">
                <Image
                    src={imagen}
                    alt={titulo}
                    fill
                    className="absolute object-cover rounded group-hover:scale-110 transition-all duration-300"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-xs uppercase tracking-wide">{categoria}</h5>
                <h3 className="text-xl text-principalDark font-light group-hover:text-orange-400 transition-colors duration-300">
                    {titulo}
                </h3>
                <span className="text-xs uppercase tracking-wide">{fecha}</span>
            </div>
        </Link>
    )
}

export default CardBlogs
