import { useState } from "react";
import Formulario from "./Componentes/Banner/Formulario";
import Banner from "./Componentes/Banner/banner";
import Time from "./Componentes/Time";
import Rodape from "./Componentes/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },

    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const colaboradoresInicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Kassia Kellem",
      cargo: "Programadora",
      imagem: "https://github.com/kassiakellem.png",
      time: times[1].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "Pedro Thiago",
      cargo: "Full Stack",
      imagem: "https://github.com/pedrotnascimento.png",
      time: times[2].nome,
    },
  ];
  const [colaboradores, setColaboradores] = useState(colaboradoresInicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      { ...colaborador, id: uuidv4(), favorito: false },
    ]);
  };

  function deletarColabordor(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColabordor}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
