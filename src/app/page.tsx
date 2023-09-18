import "./styles/home.scss";
import { Experience } from "./Componentes/experience/experience";
import { Info } from "./Componentes/information/information";
import { Midia } from "./Componentes/midiaSocial/midia";
import { Header } from "./Componentes/header/hearder";

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience />
      <Info />
      <div className="buttons"> 
        <Midia />
        <div className="btn">
          <button className="btn-primary">Entre em contato! 👾</button>
        </div>
      </div>
    </main>
  );
}
