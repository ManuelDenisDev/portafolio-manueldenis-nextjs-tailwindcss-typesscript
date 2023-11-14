import Image from 'next/image'

import Node from '@/public/images/logos/node-js.svg'
import VisualStudio from '@/public/images/logos/visualstudiocode.svg'
import Git from '@/public/images/logos/git.svg'
import Github from '@/public/images/logos/github.svg'
import NextJs from '@/public/images/logos/nextjs.svg'
import Html5 from '@/public/images/logos/html5.svg'
import CSS3 from '@/public/images/logos/css3.svg'
import JavaScript from '@/public/images/logos/javascript.svg'
import Sass from '@/public/images/logos/sass.svg'
import Bootstrap from '@/public/images/logos/bootstrap.svg'
import ReactLogo from '@/public/images/logos/react.svg'
import Tailwind from '@/public/images/logos/tailwindcss.svg'
import TypeScriptLogo from '@/public/images/logos/typescript.svg'
import Wordpress from '@/public/images/logos/wordpress.svg'
import WooCommerce from '@/public/images/logos/woo-commerce.svg'
import Figma from '@/public/images/logos/figma.svg'
import AdobeXd from '@/public/images/logos/adobe-xd.svg'
import AdobeIllustrator from '@/public/images/logos/adobe-illustrator.svg'
import AdobePhotoshop from '@/public/images/logos/adobe-photoshop.svg'

const ListHabilidades = () => {
    const habilidades = [
        { src: Node, titulo: 'Node Js', categoria: 'Entorno de ejecución' },
        { src: VisualStudio, titulo: 'Visual Studio Code', categoria: 'Editor de codigo fuente' },
        { src: Git, titulo: 'Git', categoria: 'Control de versiones' },
        { src: Github, titulo: 'Github', categoria: 'Plataforma de desarrollo colaborativo' },
        { src: Html5, titulo: 'HTML 5', categoria: 'Lenguaje de marcado' },
        { src: NextJs, titulo: 'Next.js', categoria: 'Framework de React Js' },
        { src: CSS3, titulo: 'CSS 3', categoria: 'Lenguaje de hojas de estilo' },
        {
            src: JavaScript,
            titulo: 'JavaScript',
            categoria: 'Lenguaje de programación interpretado orientado a objetos',
        },
        { src: Sass, titulo: 'Sass', categoria: 'Lenguaje de hojas de estilo' },
        { src: Bootstrap, titulo: 'Bootstrap', categoria: 'Framework para diseño web de interfaz' },
        { src: ReactLogo, titulo: 'React', categoria: 'Biblioteca de JavaScript' },
        { src: Tailwind, titulo: 'Tailwind Css', categoria: 'Framework de CSS de utilidad' },
        { src: TypeScriptLogo, titulo: 'TypeScript', categoria: 'Lenguaje de programación' },
        { src: Wordpress, titulo: 'Wordpress', categoria: 'Sistema de gestion de contenidos' },
        {
            src: WooCommerce,
            titulo: 'WooCommerce',
            categoria: 'Plugin de comercio electronic para Wordpress',
        },
        { src: Figma, titulo: 'Figma', categoria: 'Herramienta de generacion de prototipos' },
        { src: AdobeXd, titulo: 'Adobe Xd', categoria: 'Herramienta de generacion de prototipos' },
        {
            src: AdobeIllustrator,
            titulo: 'Adobe Illustrator',
            categoria: 'Editos de gráficos vectoriales',
        },
        {
            src: AdobePhotoshop,
            titulo: 'Adobe Photoshop',
            categoria: 'Editor de graficos/imagenes rasterizadas',
        },
        {
            src: AdobePhotoshop,
            titulo: 'Framer',
            categoria: 'Herramienta de generacion de prototipos',
        },
        {
            src: AdobePhotoshop,
            titulo: 'Framer Motion',
            categoria: 'Biblioteca de movimiento para react',
        },
    ]

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {habilidades.map((habilidad) => (
                <li
                    key={habilidad.src}
                    className="flex items-center border border-principalDark/10 rounded py-4 px-8 gap-4">
                    <figure className="w-9 h-9">
                        <Image src={habilidad.src} alt={habilidad.titulo} />
                    </figure>
                    <figcaption className="flex flex-col">
                        <span className="text-lg text-principalDark">{habilidad.titulo}</span>
                        <span className="text-sm">{habilidad.categoria}</span>
                    </figcaption>
                </li>
            ))}
        </ul>
    )
}

export default ListHabilidades
