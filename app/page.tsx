import Project from "./components/project";
import styles from "./page.module.css"
import data from "./data.json";

export default function Home() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.initialText}>
          <h1>Hello you✋, eu sou <strong>oguedes</strong></h1>
          
          <p>Desenvolvedor de Software Full Stack Júnior</p>
          
          <p className={styles.text}>
            Atualmente estou cursando Ciência da Computação, mas, nos meus tempos livre desenvolvo softwares (para web) almejando uma vaga na área para melhorar minhas habilidades.
            Tenho domínio em ferramentas (e conceitos) voltadas para <strong>frontend</strong> e <strong>backend</strong>
          </p>
          
          <a href="/Fullstack.pdf" target="_blank">
            <button>Meu Currículo 📄</button>
          </a>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <h3>Minhas experiências e projetos</h3>

        <Project 
          cargo={"Freelancer"} model={"💻Home Office"} 
          title={data["dodia-tapago"].title} link={data["dodia-tapago"].link}
          data={data["dodia-tapago"].data} local={data["dodia-tapago"].local} 
          description={data["dodia-tapago"].description} 
          tech={data["dodia-tapago"].tech}>
        </Project>

        <Project 
          cargo={"Freelancer"} model={"💻Home Office"} 
          title={data["decasa-metais"].title} link={data["decasa-metais"].link}
          data={data["decasa-metais"].data} local={data["decasa-metais"].local}
          description={data["decasa-metais"].description} 
          tech={data["decasa-metais"].tech}>
        </Project>
      </div>
    </div>
  );
}
