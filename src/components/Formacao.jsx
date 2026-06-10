import Secao from './Secao'
import CardExperiencia from './CardExperiencia'

function Formacao() {
    const formacoes = [
        {
            cargo: 'Desenvolvedor Full Stack em Formação',
            instituicao: 'SERRATEC - Parque Tecnológico da Região Serrana RJ',
            periodo: '2026 - Em andamento',
            descricao:
                'Participação em programa de formação intensiva em tecnologia, com foco em desenvolvimento de software, lógica de programação, back-end, front-end e construção de soluções digitais.'
        },
        {
            cargo: 'Graduação em Marketing',
            instituicao: 'Universidade Católica de Petrópolis',
            periodo: '2014 - 2017',
            descricao:
                'Formação em Marketing, Administração, Negócios e estratégias de comunicação, com base em análise de mercado, comportamento do consumidor e desenvolvimento de campanhas.'
        },
        {
            cargo: 'Técnico em Contabilidade',
            instituicao: 'C.E. ICJ - Colégio Estadual Irmã Cecília Jardim',
            periodo: '2008 - 2010',
            descricao:
                'Formação técnica em contabilidade, com base em rotinas contábeis, lançamentos, classificação de contas, conciliação e apoio a obrigações administrativas e financeiras.'
        }
    ]

    return (
        <Secao titulo="Formação e Estudos">
            {formacoes.map((formacao, index) => (
                <CardExperiencia
                    key={index}
                    cargo={formacao.cargo}
                    empresa={formacao.instituicao}
                    periodo={formacao.periodo}
                    descricao={formacao.descricao}
                />
            ))}
        </Secao>
    )
}

export default Formacao