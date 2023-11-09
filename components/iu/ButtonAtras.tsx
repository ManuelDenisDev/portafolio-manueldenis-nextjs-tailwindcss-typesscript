import { cn } from '@/libs/utils'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface ButtonAtrasProps {
    icono: IconType
    label: string
    href: string
    className?: string
}

const ButtonAtras = ({ icono: Icono, label, href, className }: ButtonAtrasProps) => {
    return (
        <Link href={href}>
            <button
                type="button"
                className={cn(
                    'flex items-center gap-2 font-light tracking-wide hover:text-orange-400 hover:gap-4 transition-all duration-300',
                    className
                )}>
                <Icono size={20} />
                {label}
            </button>
        </Link>
    )
}

export default ButtonAtras
