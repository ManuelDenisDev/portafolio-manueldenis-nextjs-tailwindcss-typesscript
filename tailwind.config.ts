import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                principalDark: '#ffffff', //{texto}
                secundarioDark: '#808080', //{texto}#808080
                fondoDark: '#121212', //{fondo}
            },
            backgroundImage: {
                'foto-perfil': "url('/images/asset-7.jpeg)",
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
        plugins: [],
    },
}
export default config
