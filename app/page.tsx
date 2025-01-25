import Project from "./components/project";
import styles from "./styles/page.module.css";
import data from "./data.json";
import Carrosel from "./components/carrosel";

export default function Home() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.initialText}>
          <h1>
            Hello you✋, eu sou <strong>oguedes</strong>
          </h1>

          <p>Desenvolvedor de Software Full Stack Júnior</p>

          <p className={styles.text}>
            Curso atualmente Ciência da Computação, desenvolvendo projetos (web)
            próprios, sempre tentando resolver algum problema real. Tenho
            domínio em ferramentas voltadas para <strong>frontend</strong>,{" "}
            <strong>backend</strong>, <strong>banco de dados</strong> e{" "}
            <strong>servidores</strong> (ex: <strong>Nginx</strong>). Estudo a
            fundo conceitos para sempre melhorar minhas práticas na área, como{" "}
            <strong>clean code</strong>, <strong>SOLID</strong>,{" "}
            <strong>UI/UX</strong>, <strong>testes automatizados</strong>,{" "}
            <strong>estrutura de dados</strong>, etc.
          </p>

          <a href="/Fullstack.pdf" target="_blank">
            <button>Meu Currículo 📄</button>
          </a>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <h3>Minhas experiências e projetos</h3>

        <Project
          cargo={"Projeto Próprio"}
          model={"💻Home Office"}
          title={data["projects"]["myqr"].title}
          link={data["projects"]["myqr"].link}
          data={data["projects"]["myqr"].data}
          local={data["projects"]["myqr"].local}
          description={data["projects"]["myqr"].description}
          tech={data["projects"]["myqr"].tech}
        ></Project>

        <Project
          cargo={"Freelancer"}
          model={"💻Home Office"}
          title={data["projects"]["dodia-tapago"].title}
          link={data["projects"]["dodia-tapago"].link}
          data={data["projects"]["dodia-tapago"].data}
          local={data["projects"]["dodia-tapago"].local}
          description={data["projects"]["dodia-tapago"].description}
          tech={data["projects"]["dodia-tapago"].tech}
        ></Project>

        <Project
          cargo={"Freelancer"}
          model={"💻Home Office"}
          title={data["projects"]["decasa-metais"].title}
          link={data["projects"]["decasa-metais"].link}
          data={data["projects"]["decasa-metais"].data}
          local={data["projects"]["decasa-metais"].local}
          description={data["projects"]["decasa-metais"].description}
          tech={data["projects"]["decasa-metais"].tech}
        ></Project>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.leftSide}>
          <h2>Quem sou eu?</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
            Como desenvolvedor de software e amante de tecnologia, sempre
            procuro novos conteúdos para aumentar minha gama de conhecimento e
            aprimorar os já adquiridos, pra dessa forma crescer na carreira.
          </p>
          <br></br>
          <p>
            Como profissional e ser humano, sou ótimo lidando com pessoas e
            trabalhando em equipes, onde além de poder ajudar meus colegas com
            assuntos que domino, também posso aprender com os mais experiêntes.
          </p>
          <br></br>
          <p>
            Tento pegar o máximo de conhecimento que posso adquirir das pessoas,
            para me tornar um desenvolvedor (e pessoa) melhor.
          </p>
        </div>
      </div>

      {/*<div className={styles.certificationsContainer}>
        <h4>Certificações adquiridas</h4>

        <Carrosel></Carrosel>
      </div>*/}
    </div>
  );
}
