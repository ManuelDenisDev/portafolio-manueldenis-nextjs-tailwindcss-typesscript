import Image from 'next/image'
import ContainerSection from './ContainerSection'
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



export default function LogoCarousel() {
    const logos = [
        { src: Node, alt: 'Node Js' },
        { src: VisualStudio, alt: 'Visual Studio Code' },
        { src: Git, alt: 'Git' },
        { src: Github, alt: 'Github' },
        { src: NextJs, alt: 'Next Js' },
        { src: Html5, alt: 'HTML 5' },
        { src: CSS3, alt: 'CSS 3' },
        { src: JavaScript, alt: 'JavaScript' },
        { src: Sass, alt: 'Sass' },
        { src: Bootstrap, alt: 'Bootstrap' },
        { src: ReactLogo, alt: 'React' },
        { src: Tailwind, alt: 'Tailwind Css' },
        { src: TypeScriptLogo, alt: 'TypeScript' },
        { src: Wordpress, alt: 'Wordpress' },
        { src: WooCommerce, alt: 'WooCommerce' },

    ]

    return (
        <ContainerSection>
            <aside className="h-24 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <Image src={logo.src} alt={logo.alt} />
                        </li>
                    ))}
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <Image src={logo.src} alt={logo.alt} />
                        </li>
                    ))}
                </ul>
            </aside>
        </ContainerSection>
    )
}
