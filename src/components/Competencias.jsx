import Secao from './Secao'

function Competencias() {
  const competencias = [
    'Aprendizado rápido',
    'Resolução de problemas',
    'Curiosidade e busca constante por conhecimento',
    'Facilidade para aprender novos sistemas',
    'Organização de informações e processos',
    'Raciocínio lógico',
    'Persistência para entender problemas',
    'Uso de IA como apoio ao aprendizado e produtividade',
    'Boa adaptação a ferramentas digitais'
  ]

  return (
    <Secao titulo="Competências e Aprendizado">
      <ul className="lista-habilidades">
        {competencias.map((competencia, index) => (
          <li key={index}>{competencia}</li>
        ))}
      </ul>
    </Secao>
  )
}

export default Competencias