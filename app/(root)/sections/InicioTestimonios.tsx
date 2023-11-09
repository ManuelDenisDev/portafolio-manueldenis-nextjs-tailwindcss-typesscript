import CardTestimonios from '@/components/iu/CardTestimonios'
import Container from '@/components/iu/Container'
import ContainerSection from '@/components/iu/ContainerSection'
import Titulo from '@/components/iu/Titulo'

const InicioTestimonios = () => {
    return (
        <ContainerSection>
            <Container>
                <Titulo titulo="Testimonios" />
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <CardTestimonios
                        nombre="John Smith"
                        cargo="CEO AT MINDFUL"
                        imagen="https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512"
                        mensaje='"Jackson possesses an exceptional talent for translating complex ideas into stunning
                and user-centric designs. He consistently goes above and beyond to understand the
                core essence of a product and its intended audience, resulting in designs that are
                not only visually appealing but also highly functional."'
                    />
                    <CardTestimonios
                        nombre="John Smith"
                        cargo="CEO AT MINDFUL"
                        imagen="https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512"
                        mensaje='"Jackson possesses an exceptional talent for translating complex ideas into stunning
                and user-centric designs. He consistently goes above and beyond to understand the
                core essence of a product and its intended audience, resulting in designs that are
                not only visually appealing but also highly functional."'
                    />
                    <CardTestimonios
                        nombre="John Smith"
                        cargo="CEO AT MINDFUL"
                        imagen="https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512"
                        mensaje='"Jackson possesses an exceptional talent for translating complex ideas into stunning
                and user-centric designs. He consistently goes above and beyond to understand the
                core essence of a product and its intended audience, resulting in designs that are
                not only visually appealing but also highly functional."'
                    />
                    <CardTestimonios
                        nombre="John Smith"
                        cargo="CEO AT MINDFUL"
                        imagen="https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512"
                        mensaje='"Jackson possesses an exceptional talent for translating complex ideas into stunning
                and user-centric designs. He consistently goes above and beyond to understand the
                core essence of a product and its intended audience, resulting in designs that are
                not only visually appealing but also highly functional."'
                    />
                </div>
            </Container>
        </ContainerSection>
    )
}

export default InicioTestimonios
