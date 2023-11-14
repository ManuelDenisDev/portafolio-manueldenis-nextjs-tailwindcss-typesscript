import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface ContainerHeaderProps {
    children: ReactNode
    className?: string
    id?: string
}

const ContainerHeader = ({ id, children, className }: ContainerHeaderProps) => {
    return (
        <header id={id} className={cn('border-b border-principalDark/10', className)}>
            {children}
        </header>
    )
}

export default ContainerHeader
