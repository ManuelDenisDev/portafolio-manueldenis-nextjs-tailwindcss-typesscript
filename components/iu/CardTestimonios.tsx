import Image from 'next/image'

interface CardTestimoniosProps {
    mensaje: string
    imagen: string
    nombre: string
    cargo: string
}

const CardTestimonios = ({ mensaje, imagen, nombre, cargo }: CardTestimoniosProps) => {
    return (
        <article className="rounded border border-principalDark/10 flex flex-col gap-8 p-8">
            <p className="text-principalDark/80 text-lg font-light tracking-wide">{mensaje}</p>
            <figure className="flex justify-between items-center gap-4">
                <div className="relative w-12 h-12 rounded-full">
                    <Image src={imagen} alt="Image" fill className="object-cover rounded-full" />
                </div>
                <figcaption className="flex flex-col flex-1">
                    <span className="text-base text-principalDark">{nombre}</span>
                    <span className="text-xs">{cargo}</span>
                </figcaption>
            </figure>
        </article>
    )
}

export default CardTestimonios
