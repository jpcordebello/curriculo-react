import Secao from './Secao'
import CardExperiencia from './CardExperiencia'

function Experiencias() {
    const experiencias = [
        // {
        //     cargo: 'Desenvolvedor Full Stack em Formação',
        //     empresa: 'SERRATEC - Parque Tecnológico da Região Serrana RJ',
        //     periodo: 'Fevereiro de 2026 - Presente',
        //     descricao:
        //         'Participação em programa de formação intensiva em tecnologia, com foco no desenvolvimento de software e soluções digitais, envolvendo lógica de programação, back-end, front-end e práticas modernas de desenvolvimento.'
        // },
        {
            cargo: 'Analista Financeiro',
            empresa: 'Targets Transportes',
            periodo: 'Janeiro de 2021 - Dezembro de 2025',
            descricao:
                'Atuação em gestão financeira e controladoria, com arrecadação, conciliação bancária, auditoria de custos, elaboração de orçamentos, projeções financeiras eotimização de processos financeiros.'
        },
        {
            cargo: 'Contas a Pagar',
            empresa: 'Ultransportes Transportadora Ltda',
            periodo: 'Janeiro de 2016 - Janeiro de 2021',
            descricao:
                'Responsável pelo recebimento, conferência e lançamento de notas fiscais, boletos, pedidos e requisições de compras. Atuação em fluxo de caixa, programação de pagamentos, relacionamento bancário, conciliação de contas e organização financeira.'
        },
        {
            cargo: 'Analista de Marketing',
            empresa: 'Estravaganzza/Zippie',
            periodo: 'Janeiro de 2013 - Setembro de 2015',
            descricao:
                'Atuação com análise de tendências de mercado e concorrência, pesquisas, cálculo de custos, campanhas publicitárias, redes sociais, comunicação e análise de resultados de ações de marketing.'
        },
        {
            cargo: 'Assistente Administrativo - Contabilidade',
            empresa: 'Editora Vozes',
            periodo: 'Novembro de 2010 - Abril de 2012',
            descricao:
                'Atuação em lançamentos contábeis, classificação de contas, conciliação bancária, provisão de impostos, balancetes, apuração de resultados e demonstrações financeiras.'
        },
        {
            cargo: 'Auxiliar de Escritório',
            empresa: 'Contabilidade Pedro H Saurino',
            periodo: 'Março de 2008 - Junho de 2010',
            descricao:
                'Lançamentos contábeis, classificação de contas,  provisão de impostos, balancetes, apuração de resultados, demonstrações financeiras e declarações fiscais ex.: IRPF, DIRF e IRPJ.'
        }
    ]

    return (
        <Secao titulo="Experiências">
            {experiencias.map((experiencia, index) => (
                <CardExperiencia
                    key={index}
                    cargo={experiencia.cargo}
                    empresa={experiencia.empresa}
                    periodo={experiencia.periodo}
                    descricao={experiencia.descricao}
                />
            ))}
        </Secao>
    )
}

export default Experiencias