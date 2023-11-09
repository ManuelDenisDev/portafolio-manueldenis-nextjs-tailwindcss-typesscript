import { cn } from '@/libs/utils'

interface ButtonProps {
    type?: 'button' | 'submit'
    label: string
    className?: string
    onClick: () => void
}

const Button = ({ type = 'button', label, className, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                'my-8 h-12 w-full border rounded border-principalDark/10 text-base font-light tracking-wide hover:bg-secundarioDark/5 hover:text-principalDark transition-colors duration-300',
                className
            )}>
            {label}
        </button>
    )
}

export default Button
