import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Secao from './components/Secao'
import Competencias from './components/Competencias'
import Idiomas from './components/Idiomas'
import Formacao from './components/Formacao'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Rodape from './components/Rodape'
import VersaoIA from './components/VersaoIA'
import MapaProfissional from './components/MapaProfissional'

function App() {
  const [versao, setVersao] = useState('humano')

  function alternarVersao(event) {
    if (event.target.checked) {
      setVersao('ia')
    } else {
      setVersao('humano')
    }
  }

  return (
    <div className="app">
      <div className="controle-switch-container">
        <span
          className={
            versao === 'humano' ? 'texto-versao ativo' : 'texto-versao'
          }
        >
          Versão para Humanos
        </span>

        <label className="switch">
          <input
            type="checkbox"
            checked={versao === 'ia'}
            onChange={alternarVersao}
          />
          <span className="slider"></span>
        </label>

        <span
          className={versao === 'ia' ? 'texto-versao ativo' : 'texto-versao'}
        >
          Versão para IA
        </span>
      </div>

      {versao === 'humano' ? (
        <>
          <Header />

          <MapaProfissional />

          <Secao titulo="Resumo Profissional">
            <p>
              Sou movido por curiosidade, aprendizado constante e pela busca de
              construir projetos com propósito. Atualmente participo da formação
              em tecnologia da Serratec, desenvolvendo competências em
              programação, lógica e desenvolvimento de soluções digitais. Também
              sou fundador da Hum, uma marca de vestuário inspirada na
              simplicidade, na natureza e no equilíbrio entre trabalho, lazer e
              bem-estar.
            </p>
          </Secao>

          <Competencias />
          {/* <Idiomas /> */}
          <Formacao />
          <Projetos />
          <Experiencias />
          <Rodape />
        </>
      ) : (
        <VersaoIA />
      )}
    </div>
  )
}

export default App