import Image from "next/image";

const interestRows = [
  {
    direction: "forward",
    interests: [
      "Mentorat",
      "Cours particuliers",
      "PostBac",
      "Savoirs",
      "Troc",
      "Tontines",
      "Dons",
      "Achats groupés",
      "Marché",
      "Coopération",
      "Entraide",
      "Sécurité",
      "Droits",
      "Voisinage",
      "Médiation",
      "Mobilité",
      "Stages",
      "Réseautage",
      "Insertion",
      "Micro-projets",
      "Métiers",
      "Entrepreneuriat",
    ],
  },
  {
    direction: "reverse",
    interests: [
      "Reboisement",
      "Potagers",
      "Recyclage",
      "Set-Setal",
      "Solaire",
      "Eau",
      "Expositions",
      "Vernissages",
      "Ateliers",
      "Artisanat",
      "Sport",
      "Nutrition",
      "Prévention",
      "Bien-être",
      "Seniors",
      "Solidarité",
      "Jeunesse",
      "Jeux",
      "Débats",
      "Cinéma",
      "Technologie",
      "Rencontres",
    ],
  },
];
const interests = interestRows.flatMap((row) => row.interests);

export function Audience() {
  return (
    <section className="enkomu-audience" id="public" aria-labelledby="audience-title">
      <div className="enkomu-audience__copy">
        <span className="enkomu-eyebrow">Pour tout le monde</span>
        <h2 id="audience-title">
          Enkomu s&apos;adresse
          <span> à tous les profils</span>
        </h2>
        <p>
          Que vous soyez un citoyen engagé, une association locale, un entrepreneur ou
          simplement curieux — Enkomu est fait pour vous, et ce, peu importe vos centres
          d&apos;intérêt !
        </p>
        <div className="enkomu-audience__interest-frame" aria-hidden="true">
          {interestRows.map((row) => (
            <div className="enkomu-audience__interest-window" key={row.direction}>
              <div
                className={`enkomu-audience__interest-track ${
                  row.direction === "reverse" ? "is-reversed" : ""
                }`}
              >
                {[0, 1].map((copy) => (
                  <ul className="enkomu-audience__interest-group" key={copy}>
                    {row.interests.map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ul className="sr-only" aria-label="Centres d’intérêt">
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="enkomu-audience__visual">
        <Image
          src="/enkomu/img6.png"
          alt="Une famille de générations différentes rassemblée autour d’un projet commun"
          width={2070}
          height={2070}
          sizes="(max-width: 767px) 80vw, 34vw"
        />
      </div>
    </section>
  );
}
