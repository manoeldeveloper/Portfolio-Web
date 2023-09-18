import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

interface InfoProps {

}
export function Info() {
    return(
        <div className="infos">
            <SectionTitle text="Idiomas"/>
        <div className="infolinguagens">
          <span>🇧🇷 PT-BR - Nativo</span>
          <br></br>
          <span>🇺🇸 EN - Básico/Intermediário</span>
        </div>
        <SectionTitle text="Educação"/> 
        <span>🎓 Análise e Desenvolvimento de Sistemas - Programa Embarque Digital - Faculdade Senac</span>
      </div>
    )
}