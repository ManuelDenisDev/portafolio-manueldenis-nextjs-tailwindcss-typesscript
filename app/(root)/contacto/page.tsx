import Container from '@/components/iu/Container'
import ContainerHeader from '@/components/iu/ContainerHeader'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'
import Form from './form/form'

const PageContacto = () => {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <Titulo titulo="Hablemos!" />
                </Container>
            </ContainerHeader>
            <ContainerSection>
                <Container>
                    <p className='max-w-2xl mx-auto'>
                        Si desea hablar sobre un proyecto potencial o simplemente saludar, envíeme
                        un mensaje o envíeme un correo electrónico a
                        <span className='text-principalDark'> manueldenis.developer@gmail.com</span>.
                    </p>
                    <Form />
                </Container>
            </ContainerSection>
        </>
    )
}

export default PageContacto
