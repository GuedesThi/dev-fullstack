import styles from "./project.module.css";

interface ProjectParams {
  cargo:
    | "Projeto Próprio"
    | "Freelancer"
    | "Desenvolvedor Frontend Júnior"
    | "Desenvolvedor Backend Júnior"
    | "Desenvolvedor Fullstack Júnior";
  model: "💻Home Office" | "🪑Presencial";
  title: string;
  link: string[];
  data: string;
  local: string;
  description: string;
  tech: string[];
}

export default function Project({
  cargo,
  title,
  link,
  local,
  data,
  model,
  description,
  tech,
}: ProjectParams) {
  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <h1>{cargo}</h1>
        <span>{model}</span>
      </div>

      <div className={styles.secondLine}>
        <h2>{title}</h2>
        <div className={styles.linkContainer}>
          {link.map((link, index) => (
            <a
              href={link}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.thirdLine}>
        <h3>
          {data} ({local})
        </h3>
      </div>

      <div className={styles.fourthLine}>
        <p>{description}</p>
      </div>

      <div className={styles.lastLine}>
        {tech.map((i) => (
          <div key={i} className={styles.tech}>
            <span>{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
