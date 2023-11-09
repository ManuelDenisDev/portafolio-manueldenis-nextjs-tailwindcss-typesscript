'use client'

import Link from 'next/link'
import MainMenu from '@/components/shared/MainMenu'

interface SidebarProps {
    showMenu: boolean
    onClose: () => void
}

const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
    return (
        <>
            <aside
                className={`fixed top-0 bg-fondoDark w-60 h-full border-r border-principalDark/10 transition-all duration-300 ease-in-out z-50 lg:left-0 ${
                    showMenu ? 'left-0' : '-left-full'
                }`}>
                <section className="p-8 border-b border-principalDark/10">
                    <Link
                        href="/"
                        className="text-principalDark text-xl font-light tracking-wide hover:text-orange-400 transition-colors duration-300">
                        Manuel Denis
                    </Link>
                    <h3 className="font-extralight tracking-wide">Desarrollador Web</h3>
                </section>
                <nav>
                    <MainMenu />
                </nav>
            </aside>
            <div
                onClick={onClose}
                className={`fixed bg-fondoDark/90 z-40 left-0 top-0 w-full h-full ${
                    showMenu ? 'block' : 'hidden'
                }`}></div>
        </>
    )
}

export default Sidebar
