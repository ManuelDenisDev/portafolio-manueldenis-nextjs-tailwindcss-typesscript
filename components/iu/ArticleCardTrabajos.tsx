import CardTrabajos from './CardTrabajos'

const ArticleCardTrabajos = () => {
    return (
        <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <CardTrabajos
                href="/trabajos/detalles"
                imagen="https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp"
                categoria="Landing Page"
                titulo="Peña Real Madrid Algeciras"
            />
            <CardTrabajos
                href="/trabajos-02"
                imagen="https://framerusercontent.com/images/VL1paRJcTdgdBftv6w0aff87XQQ.jpg?scale-down-to=512"
                categoria="Sitio Web"
                titulo="Elena Cibaja - Diseño de Interiores"
            />
            <CardTrabajos
                href="/trabajos-03"
                imagen="https://framerusercontent.com/images/KQp15xIkdDYP9w6se5eUh9Rq7Y.jpg?scale-down-to=512"
                categoria="Tienda Online"
                titulo="Estilo Vikingo"
            />
        </article>
    )
}

export default ArticleCardTrabajos
