import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: time.cor,
        backgroundColor: hexToRgba(time.cor, "0.6"),
      }}
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        value={time.cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              corFundo={time.cor}
              colaborador={colaborador}
              key={colaborador.nome}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
