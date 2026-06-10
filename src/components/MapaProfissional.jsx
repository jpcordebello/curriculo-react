import { FaUserTie } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa6'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { GrMoney } from 'react-icons/gr'
import { LuBrain } from 'react-icons/lu'
import { GiWorld } from 'react-icons/gi'

function MapaProfissional() {
    const itensMapa = [
        {
            icone: <FaUserTie />,
            titulo: 'Perfil',
            texto: 'João Paulo Cordebello',
            detalhes: [
                {
                    label: 'Email',
                    texto: 'jp_cordebello@hotmail.com',
                    link: 'mailto:jp_cordebello@hotmail.com'
                },
                {
                    label: 'GitHub',
                    texto: 'github.com/jpcordebello',
                    link: 'https://github.com/jpcordebello'
                },
                {
                    label: 'LinkedIn',
                    texto: 'linkedin.com/in/jpcordebello',
                    link: 'https://www.linkedin.com/in/jpcordebello'
                }
            ]
        },
        {
            icone: <FaDesktop />,
            titulo: 'Tecnologia',
            texto: 'Serratec | Full Stack em formação'
        },
        {
            icone: <HiOutlineAcademicCap />,
            titulo: 'Formação',
            texto: 'Marketing, Contabilidade e Desenvolvimento'
        },
        {
            icone: <GrMoney />,
            titulo: 'Finanças',
            texto: 'Controladoria, análise e processos'
        },
        {
            icone: <LuBrain />,
            titulo: 'Competências',
            texto: 'Aprendizado rápido e resolução de problemas'
        },
        {
            icone: <GiWorld />,
            titulo: 'Idiomas',
            texto: 'Português e Inglês'
        }
    ]

    return (
        <section className="mapa-profissional">
            <h2>Mapa Profissional</h2>

            <p className="mapa-intro">
                Uma visão geral da minha trajetória, conectando formação, tecnologia,
                experiência financeira, idiomas e competências de aprendizado.
            </p>

            <div className="mapa-grid">
                {itensMapa.map((item, index) => (
                    <div key={index} className="mapa-card">
                        <div className="mapa-icone">{item.icone}</div>

                        <h3>{item.titulo}</h3>

                        <p>{item.texto}</p>

                        {item.detalhes && (
                            <ul className="mapa-lista-contato">
                                {item.detalhes.map((detalhe, index) => (
                                    <li key={index}>
                                        <strong>{detalhe.label}:</strong>{' '}
                                        <a
                                            href={detalhe.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {detalhe.texto}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MapaProfissional