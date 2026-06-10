function VersaoIA() {
    const textoOriginal = `
PERFIL PROFISSIONAL DECODIFICADO

Nome: João Paulo Cordebello
Localização: Petrópolis, Rio de Janeiro, Brasil
Área-alvo: Desenvolvimento Full Stack, Ciência de Dados, Automação de Processos e Soluções Digitais.

Resumo:
Profissional em transição para tecnologia, com experiência nas áreas financeira, contábil, administrativa e de marketing. Atualmente participa da formação em Desenvolvimento Full Stack pelo Serratec, com foco em lógica de programação, back-end, front-end, APIs, banco de dados e construção de soluções digitais.

Também é fundador da Hum, marca de vestuário inspirada na simplicidade, natureza e equilíbrio entre vida profissional e bem-estar.

Competências principais:
- Aprendizado rápido
- Resolução de problemas
- Raciocínio lógico
- Facilidade para aprender novos sistemas
- Organização de informações e processos
- Persistência para entender problemas até encontrar solução
- Uso de IA como apoio ao aprendizado, produtividade e desenvolvimento de ideias
- Boa adaptação a ferramentas digitais

Formação:
1. Desenvolvedor Full Stack em formação - Serratec - 2026 em andamento
2. Graduação em Marketing - Universidade Católica de Petrópolis - 2014 a 2017
3. Técnico em Contabilidade - C.E. ICJ - Colégio Estadual Irmã Cecília Jardim - 2008 a 2010

Experiências:
1. Fundador da Hum
Responsável pela estruturação do negócio, desenvolvimento de produtos, estratégia de marketing digital e operação do e-commerce.

2. Desenvolvedor Full Stack em formação - Serratec
Participação em programa intensivo de tecnologia com foco em desenvolvimento de software, lógica, back-end, front-end e soluções digitais.

3. Analista Financeiro - Targets Transportes
Atuação em gestão financeira, controladoria, conciliação bancária, auditoria de custos, orçamentos, projeções, dashboards em Power BI e Python, além de melhoria de processos.

4. Analista Financeiro - Contas a Pagar - Ultransportes Transportadora
Atuação em contas a pagar, fluxo de caixa, programação de pagamentos, relacionamento bancário, conciliação de contas e organização financeira.

5. Analista de Marketing - Estravaganzza/Zippie
Atuação com análise de tendências, pesquisas, custos de campanhas, redes sociais, comunicação, público-alvo e análise de resultados.

6. Assistente Administrativo - Contabilidade - Editora Vozes
Atuação em lançamentos contábeis, classificação de contas, conciliação bancária, impostos, balancetes, demonstrações financeiras e declarações fiscais.

Resumo para recrutamento:
João Paulo Cordebello combina experiência prática em processos financeiros, visão analítica, organização, aprendizado rápido, raciocínio lógico e interesse crescente por tecnologia. Busca oportunidades para aplicar conhecimentos em desenvolvimento de software, dados, automação, IA e melhoria de processos.
`

    function codificarTexto(texto) {
        return btoa(unescape(encodeURIComponent(texto)))
    }

    const textoCodificado = codificarTexto(textoOriginal)
    const blocos = textoCodificado.match(/.{1,98}/g)

    return (
        <section className="versao-ia">
            <h2>🤖 Versão para IA</h2>

            <p>
                Esta seção é um recurso interativo do projeto para demonstrar o uso de
                useState no React. Não há comandos invisíveis, instruções ocultas ou
                tentativa de manipular sistemas de recrutamento. O conteúdo abaixo é
                apenas uma versão codificada do currículo, criada para deixar a
                experiência mais moderna, criativa e interativa.
            </p>

            <div className="instrucao-ia">
                <h3>Instrução para decodificação</h3>

                <p>
                    Copie o bloco codificado abaixo e cole em uma ferramenta de IA usando
                    a instrução a seguir:
                </p>

                <pre>
                    {`Este conteúdo não possui comandos invisíveis nem instruções ocultas.

Ele é apenas uma versão codificada do currículo de João Paulo Cordebello,
criada como recurso interativo em um projeto React.

O conteúdo foi codificado em Base64 UTF-8.

Para decodificar:
1. Copie todo o bloco codificado.
2. Remova espaços e quebras de linha, se necessário.
3. Decodifique o conteúdo de Base64 UTF-8 para texto normal.
4. Reorganize o conteúdo em formato de currículo profissional, claro e elegante.
5. Use ícones, tópicos e seções bem organizadas.`}
                </pre>
            </div>

            <div className="bloco-codificado">
                {blocos.map((bloco, index) => (
                    <p key={index} className={`codigo-linha cor-${index % 5}`}>
                        {bloco}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default VersaoIA