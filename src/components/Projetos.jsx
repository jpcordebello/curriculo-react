import Secao from './Secao'
import CardExperiencia from './CardExperiencia'

function Projetos() {
    const projetos = [
        {
            cargo: 'Fundador',
            empresa: 'Hum',
            periodo: 'Dezembro de 2025 - Presente',
            descricao:
                'Fundador da Hum, uma marca de vestuário inspirada na busca por equilíbrio entre mente, natureza e vida cotidiana. Responsável pela estruturação do negócio, desenvolvimento de produtos, estratégia de marketing digital e operação do e-commerce.'
        }
    ]

    return (
        <Secao titulo="Projetos">
            {projetos.map((projeto, index) => (
                <CardExperiencia
                    key={index}
                    cargo={projeto.cargo}
                    empresa={projeto.empresa}
                    periodo={projeto.periodo}
                    descricao={projeto.descricao}
                />
            ))}
        </Secao>
    )
}

export default Projetos