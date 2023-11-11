import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn('mx-6 my-8 lg:mx-28 lg:my-16 space-y-8', className)}>{children}</div>
}

export default Container
