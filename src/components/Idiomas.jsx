import Secao from './Secao'

function Idiomas() {
    const idiomas = [
        {
            idioma: 'Português',
            nivel: 'Nativo'
        },
        {
            idioma: 'Inglês',
            nivel: 'Profissional de trabalho'
        }
    ]

    return (
        <Secao titulo="Idiomas">
            <ul className="lista-idiomas">
                {idiomas.map((item, index) => (
                    <li key={index}>
                        <strong>{item.idioma}</strong>
                        <span>{item.nivel}</span>
                    </li>
                ))}
            </ul>
        </Secao>
    )
}

export default Idiomas