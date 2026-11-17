import Image from "next/image";

export function Footer() {
  return (
    <footer className="enkomu-footer">
      <div className="enkomu-footer__main">
        <div className="enkomu-footer__identity">
          <a className="enkomu-footer__brand" href="#accueil" aria-label="Enkomu, accueil">
            <Image
              src="/enkomu/logo2.png"
              alt="Symbole de la communauté Enkomu"
              width={2424}
              height={2424}
              sizes="(max-width: 767px) 110px, 186px"
            />
          </a>
          <p>
            La plateforme collaborative
            <br />
            pour transformer nos
            <br />
            communautés au Sénégal
          </p>
        </div>
        <div className="enkomu-footer__attribution">
          <p>Un produit de :</p>
          <Image
            src="/enkomu/Senegal.png"
            alt="Nicomatic Sénégal"
            width={8330}
            height={1642}
            sizes="(max-width: 767px) 125px, 168px"
          />
        </div>
      </div>
      <div className="enkomu-footer__bottom">
        <p>enKomu © 2026 - Propulsé par la communauté</p>
      </div>
    </footer>
  );
}
