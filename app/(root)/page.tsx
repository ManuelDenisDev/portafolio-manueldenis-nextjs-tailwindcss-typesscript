import InicioBlogs from './sections/InicioBlogs'
import InicioLogos from './sections/InicioLogos'
import InicioPresentacion from './sections/InicioPresentacion'
import InicioServicios from './sections/InicioServicios'
import InicioTestimonios from './sections/InicioTestimonios'
import InicioTrabajos from './sections/InicioTrabajos'

export default function Inicio() {
    return (
        <>
            <InicioPresentacion />
            <InicioLogos />
            <InicioTrabajos />
            <InicioTestimonios />
            <InicioServicios />
            <InicioBlogs />
        </>
    )
}
