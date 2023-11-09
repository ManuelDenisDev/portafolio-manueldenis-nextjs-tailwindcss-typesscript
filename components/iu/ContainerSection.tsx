import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface ContainerSectionProps {
    children: ReactNode
    className?: string
    id?: string
}

const ContainerSection = ({ id, children, className }: ContainerSectionProps) => {
    return (
        <section id={id} className={cn('border-b border-principalDark/10', className)}>
            {children}
        </section>
    )
}

export default ContainerSection
