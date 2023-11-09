import { cn } from '@/libs/utils'

interface TituloProps {
    titulo: string
    className?: string
}

const Titulo = ({ titulo, className }: TituloProps) => {
    return (
        <h1 className={cn('text-3xl font-light text-principalDark tracking-wide', className)}>
            {titulo}
        </h1>
    )
}

export default Titulo
