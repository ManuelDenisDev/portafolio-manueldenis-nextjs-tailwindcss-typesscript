import { cn } from '@/libs/utils'

interface TituloDetallesProps {
    titulo: string
    className?: string
}

const TituloDetalles = ({ titulo, className }: TituloDetallesProps) => {
    return (
        <h3
            className={cn(
                'text-3xl font-light text-principalDark tracking-wide relative ml-16 before:absolute before:w-4 before:h-4 before:border before:border-orange-400 before:-left-8 before:top-1/2 before:-translate-y-1/2',
                className
            )}>
            {titulo}
        </h3>
    )
}

export default TituloDetalles
