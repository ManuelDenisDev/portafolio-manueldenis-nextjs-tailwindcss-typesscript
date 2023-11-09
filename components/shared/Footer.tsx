import { cn } from '@/libs/utils'
import Container from '../iu/Container'

const Footer = () => {
    return (
        <footer className={cn('border-b border-principalDark/10')}>
            <Container className="flex justify-center items-center">
                <p className="tracking-wide">
                    &copy; Derechos reservados.{' '}
                    <span className="text-principalDark font-light tracking-wide">
                        Manuel Denis
                    </span>
                </p>
            </Container>
        </footer>
    )
}

export default Footer
