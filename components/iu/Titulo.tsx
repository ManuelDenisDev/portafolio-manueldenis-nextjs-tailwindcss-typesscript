interface TituloProps {
    titulo: string
}

const Titulo = ({ titulo }: TituloProps) => {
    return <h1 className="my-4 md:my-8 text-3xl font-light text-principalDark tracking-wide">{titulo}</h1>
}

export default Titulo
