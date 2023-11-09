'use client'

import { ReactNode, useState } from 'react'

import { VscListFlat } from 'react-icons/vsc'

import Sidebar from '@/components/shared/Sidebar'
import ButtonIcono from '@/components/iu/ButtonIcono'
import Footer from '@/components/shared/Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="border border-principalDark/10">
            <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
            <header className="z-30 sticky top-0 bg-fondoDark flex justify-between items-center h-16 border-b border-principalDark/10 lg:hidden transition-all duration-300">
                <h2 className="px-6 text-principalDark text-xl font-light tracking-wide hover:text-orange-400 transition-colors duration-300">
                    Manuel Denis
                </h2>
                <ButtonIcono
                    icono={VscListFlat}
                    onClick={() => setShowMenu(true)}
                    className="px-6 border-l h-full border-principalDark/10 hover:bg-secundarioDark/5 hover:text-principalDark transition-colors duration-300 lg:hidden"
                />
            </header>
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
