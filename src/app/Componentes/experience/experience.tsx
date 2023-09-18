import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";
import Image from "next/image";

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Sobre Mim" />
            <p>Em 2020, fui aprovado em terceiro lugar na Escola Técnica Estadual Dom Bosco e me formei como Técnico em Publicidade. Durante meu curso, pude aprimorar minhas habilidades ao participar de dois projetos tecnológicos como bolsista na FACEPE. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas pelo programa do Embarque Digital.</p>
            <div className="experience-time">
                <div className="exp">
                    <Image
                        src="/java.png"
                        alt="java foto"
                        width={50}
                        height={50}
                        priority
                    />
                    <div className="experience-bar">
                        <div className="experience-fill" style={{ width: '65%' }}></div>
                    </div>
                </div>
                <div className="exp">
                    <Image
                        src="/flutter.png"
                        alt="flutter foto"
                        width={50}
                        height={50}
                        priority
                    />
                    <div className="experience-bar">
                        <div className="experience-fill" style={{ width: '35%' }}></div>
                    </div>
                </div>
                <div className="exp">
                    <Image
                        src="/c.png"
                        alt="Linguagem C foto"
                        width={50}
                        height={50}
                        priority
                    />
                    <div className="experience-bar">
                        <div className="experience-fill" style={{ width: '25%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
