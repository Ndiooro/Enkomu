"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const miniHeroAlt = "Des supporters sénégalais réunis dans une célébration collective.";
const miniHeroImage = getImageProps({
  src: "/hero%20carousel/minihero.png",
  alt: miniHeroAlt,
  width: 1760,
  height: 3824,
  sizes: "100vw",
}).props;

const heroSlides = [
  {
    src: "/hero%20carousel/Default.png",
    alt: "Des supporters célèbrent un match ensemble avec un drapeau sénégalais.",
  },
  {
    src: "/hero%20carousel/Variant2.png",
    alt: "Des habitants circulent dans une rue animée de Dakar.",
  },
  {
    src: "/hero%20carousel/Variant3.png",
    alt: "Des membres d’une communauté se réunissent sous un arbre.",
  },
  {
    src: "/hero%20carousel/Variant4.png",
    alt: "Une main plante un jeune arbre dans la terre.",
  },
  {
    src: "/hero%20carousel/Variant5.png",
    alt: "Trois garçons posent ensemble sur une plage.",
  },
  {
    src: "/hero%20carousel/Variant6.png",
    alt: "Des mains se rassemblent autour d’un ballon de football.",
  },
  {
    src: "/hero%20carousel/Variant7.png",
    alt: "Des femmes se réunissent à l’ombre d’un arbre.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 1101px)");
    let intervalId: number | undefined;

    const updateCarousel = () => {
      setIsCompactViewport(!desktopViewport.matches);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }

      if (prefersReducedMotion || !desktopViewport.matches) return;

      intervalId = window.setInterval(() => {
        setActiveSlide((current) => (current + 1) % heroSlides.length);
      }, 6000);
    };

    updateCarousel();
    desktopViewport.addEventListener("change", updateCarousel);

    return () => {
      desktopViewport.removeEventListener("change", updateCarousel);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion]);

  const slide = heroSlides[activeSlide];

  return (
    <section className="enkomu-hero" id="accueil" aria-labelledby="enkomu-title">
      <div className="enkomu-hero__copy">
        <a className="enkomu-hero__brand" href="#accueil" aria-label="Enkomu, accueil">
          <Image
            src="/enkomu/Logo.png"
            alt="Logo Enkomu"
            width={760}
            height={188}
            sizes="145px"
          />
        </a>
        <h1 id="enkomu-title">
          <span>Agir et transformer</span>
          <span>notre</span>
          <span>communauté</span>
          <span>ensemble</span>
        </h1>
        <p>
          Enkomu est la première plateforme collaborative qui connecte les citoyens,
          organisations et projets locaux pour bâtir ensemble un Sénégal plus uni et
          solidaire.
        </p>
        <a className="enkomu-button" href="#inscription">
          Rejoindre la communauté
        </a>
      </div>
      <div
        className="enkomu-hero__visual"
        role="region"
        aria-label="Visuel de la communauté Enkomu"
      >
        <picture className="enkomu-hero__picture">
          <source
            media="(max-width: 1100px)"
            srcSet={miniHeroImage.srcSet}
            sizes={miniHeroImage.sizes}
          />
          <Image
            key={slide.src}
            src={slide.src}
            alt={isCompactViewport ? miniHeroAlt : slide.alt}
            fill
            loading="eager"
            sizes="(max-width: 1100px) 100vw, 55vw"
            className="enkomu-hero__image"
          />
        </picture>
      </div>
    </section>
  );
}
