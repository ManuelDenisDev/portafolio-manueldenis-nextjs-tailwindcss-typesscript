import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface ContainerMainProps {
    children: ReactNode
    className?: string
    id?: string
}

const ContainerMain = ({ id, children, className }: ContainerMainProps) => {
    return (
        <main id={id} className={cn('border-b border-principalDark/10', className)}>
            {children}
        </main>
    )
}

export default ContainerMain
