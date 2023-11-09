import { IconType } from 'react-icons'

interface ButtonSocialProps {
    icon: IconType
    href: string
}

const ButtonSocialMedia = ({ icon: Icon, href }: ButtonSocialProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border rounded border-principalDark/10 hover:bg-secundarioDark/5 hover:text-principalDark transition-colors duration-300">
            <Icon size={22} />
        </a>
    )
}

export default ButtonSocialMedia
