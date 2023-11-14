import CardTrabajos from './CardTrabajos'
import Asset12 from '@/public/images/asset-12.png'

const ArticleCardTrabajos = () => {
    return (
        <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <CardTrabajos
                href="/trabajos/detalles"
                imagen={Asset12}
                categoria="Landing Page"
                titulo="Peña Real Madrid Algeciras"
            />
            <CardTrabajos
                href="/trabajos-02"
                imagen={Asset12}
                categoria="Sitio Web"
                titulo="Elena Cibaja - Diseño de Interiores"
            />
            <CardTrabajos
                href="/trabajos-03"
                imagen={Asset12}
                categoria="Tienda Online"
                titulo="Estilo Vikingo"
            />
        </article>
    )
}

export default ArticleCardTrabajos
