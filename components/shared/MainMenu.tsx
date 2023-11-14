import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    VscHome,
    VscSymbolMethod,
    VscServer,
    VscVersions,
    VscAccount,
    VscGithubAlt,
    VscMention,
} from 'react-icons/vsc'

const MainMenu = () => {
    const routes = [
        {
            label: 'Inicio',
            icon: VscHome,
            href: '/',
        },
        {
            label: 'Trabajos',
            icon: VscSymbolMethod,
            href: '/trabajos',
        },
        {
            label: 'Habilidades',
            icon: VscServer,
            href: '/habilidades',
        },
        {
            label: 'Servicios',
            icon: VscVersions,
            href: '/servicios',
        },
        {
            label: 'Sobre mi',
            icon: VscAccount,
            href: '/sobremi',
        },
        {
            label: 'Github',
            icon: VscGithubAlt,
            href: '/github',
        },
        {
            label: 'Contacto',
            icon: VscMention,
            href: '/contacto',
        },
    ]

    const pathname = usePathname()

    return (
        <ul>
            <li>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'flex items-center gap-3 py-5 px-8 border-b border-principalDark/10 hover:bg-secundarioDark/5 hover:text-principalDark transition-colors duration-300',
                            pathname === route.href && 'text-principalDark'
                        )}>
                        <route.icon size={20} />
                        <span className="tracking-wide">{route.label}</span>
                    </Link>
                ))}
            </li>
        </ul>
    )
}

export default MainMenu
