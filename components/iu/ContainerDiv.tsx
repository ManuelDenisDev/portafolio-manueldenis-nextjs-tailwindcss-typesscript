import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface ContainerDivProps {
    children: ReactNode
    className?: string
    id?: string
}

const ContainerDiv = ({ id, children, className }: ContainerDivProps) => {
    return (
        <main id={id} className={cn('border-b border-principalDark/10', className)}>
            {children}
        </main>
    )
}

export default ContainerDiv