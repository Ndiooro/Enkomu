import Image from "next/image";

export function Header() {
  return (
    <header className="enkomu-header">
      <a className="enkomu-header__brand" href="#accueil" aria-label="Enkomu, accueil">
        <Image
          src="/enkomu/Logo.png"
          alt="Logo Enkomu"
          width={760}
          height={188}
          sizes="(max-width: 640px) 140px, 190px"
        />
      </a>
    </header>
  );
}
