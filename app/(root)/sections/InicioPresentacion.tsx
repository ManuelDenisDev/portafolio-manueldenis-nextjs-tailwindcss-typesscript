import { informacionInicio } from '@/assets/data'
import ButtonSocialMedia from '@/components/iu/ButtonSocialMedia'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Image from 'next/image'

const InicioPresentacion = () => {
    return (
        <ContainerSection>
            <Container>
                <header className="flex justify-between items-start">
                    <Image
                        className="w-24 aspect-square object-cover rounded"
                        src={informacionInicio.fotoPerfil}
                        width={240}
                        height={240}
                        alt="Foto Perfil"
                    />
                    <div className="flex justify-center items-center gap-2 bg-green-950/50 px-4 py-2 rounded h-10">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="font-extralight tracking-wide text-green-500">
                            {informacionInicio.disponible}
                        </span>
                    </div>
                </header>
                <article className="space-y-4 max-w-3xl">
                    <h2 className="text-3xl font-light text-principalDark tracking-wide">
                        {informacionInicio.titulo}
                    </h2>
                    <p className="text-base font-extralight tracking-wide">
                        {informacionInicio.descripcion}
                    </p>
                </article>
                <footer className="flex gap-4">
                    {informacionInicio.socialMedia.map((social) => (
                        <ButtonSocialMedia
                            key={social.href}
                            href={social.href}
                            icon={social.icon}
                        />
                    ))}
                </footer>
            </Container>
        </ContainerSection>
    )
}

export default InicioPresentacion
