import { cn } from '@/libs/utils'

interface ButtonLinkProps {
    label: string
    className?: string
    href: string
}

const ButtonLink = ({ label, className, href }: ButtonLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className={cn(
                'my-8 h-12 flex justify-center items-center w-full border rounded border-principalDark/10 text-base font-light tracking-wide hover:bg-secundarioDark/5 hover:text-principalDark transition-colors duration-300',
                className
            )}>
            {label}
        </a>
    )
}

export default ButtonLink
