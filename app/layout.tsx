import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Outfit } from 'next/font/google'
import { cn } from '@/libs/utils'
import '@/app/globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Manuel Denis Developer - Portafolio Web',
    description:
        'Manuel Denis es un desarrollador autónomo freelance de páginas web y apps móviles ubicado en el Campo de Gibraltar, España',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body className={cn('bg-fondoDark text-secundarioDark', outfit.className)}>
                <main className="pl-0 lg:pl-60 transition-all duration-300">{children}</main>
            </body>
        </html>
    )
}
