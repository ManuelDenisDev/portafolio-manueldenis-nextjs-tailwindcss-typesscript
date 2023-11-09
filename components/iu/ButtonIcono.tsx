import { cn } from '@/libs/utils'
import { IconType } from 'react-icons'
import { VscListFlat } from 'react-icons/vsc'

interface ButtonIconoProps {
    icono: IconType
    onClick: () => void
    className?: string
}

const ButtonIcono = ({ icono: Icono, onClick, className }: ButtonIconoProps) => {
    return (
        <button
            type="button"
            className={cn('px-6 border-l h-full border-principalDark/10 lg:hidden', className)}
            onClick={onClick}>
            <Icono size={30} />
            {/* <VscListFlat size={30} /> */}
        </button>
    )
}

export default ButtonIcono
