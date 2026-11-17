"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const slides = [
  {
    title: "Découverte",
    description:
      "Explorez les événements, projets citoyens et activités publiques autour de vos centres d'intérêt.",
    image: "/enkomu/découverte.png",
    width: 1836,
    height: 2900,
    alt: "Écran Découvrir de l’application Enkomu présentant des projets citoyens et des activités locales",
    icon: "discovery",
  },
  {
    title: "Coopération",
    description:
      "Adhérez à des projets locaux, collaborez via des canaux de discussion dédiés et suivez l’avancement en temps réel.",
    image: "/enkomu/cooperation.png",
    width: 2320,
    height: 2900,
    alt: "Écran de coopération de l’application Enkomu montrant un projet local et son suivi",
    icon: "cooperation",
  },
  {
    title: "Impact",
    description:
      "Organisez vos projets et activités (gestion des horaires, participants, tarifs si applicable, suivi) et embarquez votre communauté.",
    image: "/enkomu/impact.png",
    width: 2320,
    height: 2900,
    alt: "Écran de création d’une action dans l’application Enkomu",
    icon: "impact",
  },
  {
    title: "Points de fidélité",
    description:
      "Gagnez des points en participant aux activités, en organisant des événements et en contribuant à la communauté. Échangez vos points contre des récompenses exclusives.",
    image: "/enkomu/pointsfidelite.png",
    width: 2320,
    height: 2900,
    alt: "Écran des points de fidélité et des badges Komus dans l’application Enkomu",
    icon: "loyalty",
  },
  {
    title: "Parrainage",
    description:
      "Invitez vos proches à rejoindre EnKomu et débloquez des avantages exclusifs. Chaque nouveau membre parrainé renforce votre réseau et enrichit la communauté.",
    image: "/enkomu/parrainage.png",
    width: 2320,
    height: 2900,
    alt: "Écran du badge de parrainage dans l’application Enkomu",
    icon: "referral",
  },
];
const carouselSlides = [...slides, slides[0]];

export function AppShowcase() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeSlide = trackIndex === slides.length ? 0 : trackIndex;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setTrackIndex((current) =>
        current === slides.length ? current : current + 1,
      );
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (trackIndex !== slides.length) return;

    const resetId = window.setTimeout(() => {
      setTransitionEnabled(false);
      setTrackIndex(0);
      window.setTimeout(() => setTransitionEnabled(true), 50);
    }, prefersReducedMotion ? 0 : 650);

    return () => window.clearTimeout(resetId);
  }, [prefersReducedMotion, trackIndex]);

  function showSlide(index: number) {
    if (trackIndex === slides.length) return;
    setTransitionEnabled(true);
    setTrackIndex((index + slides.length) % slides.length);
  }

  return (
    <section className="enkomu-showcase" id="fonctionnalites" aria-labelledby="showcase-title">
      <div className="enkomu-showcase__heading">
        <h2 id="showcase-title">Comment Enkomu change votre manière de collaborer</h2>
        <p>Une application complète pour connecter et créer un impact positif</p>
      </div>
      <div className="enkomu-showcase__content" aria-live={prefersReducedMotion ? "polite" : "off"}>
        <div
          className={`enkomu-showcase__track${transitionEnabled ? "" : " is-resetting"}`}
          style={{ transform: `translateX(-${trackIndex * 100}%)` }}
        >
          {carouselSlides.map((slide, index) => (
            <div
              className="enkomu-showcase__slide"
              key={`${slide.title}-${index}`}
              aria-hidden={index !== activeSlide}
            >
              <div className="enkomu-showcase__device">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  quality={90}
                  sizes="(max-width: 359px) 256px, (max-width: 449px) 312px, (max-width: 767px) 328px, (max-width: 1023px) 300px, 360px"
                />
              </div>
              <article className="enkomu-showcase__card">
                <span className="enkomu-showcase__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    {slide.icon === "discovery" && (
                      <>
                        <circle cx="10.5" cy="10.5" r="6.5" />
                        <path d="m16 16 4 4" />
                      </>
                    )}
                    {slide.icon === "cooperation" && (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    )}
                    {slide.icon === "impact" && (
                      <>
                        <path d="M4 17.5 9 12l3.5 3.5L20 7" />
                        <path d="M14.5 7H20v5.5" />
                      </>
                    )}
                    {slide.icon === "loyalty" && (
                      <>
                        <circle cx="12" cy="8" r="5" />
                        <path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" />
                      </>
                    )}
                    {slide.icon === "referral" && (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M19 8v6M16 11h6" />
                      </>
                    )}
                  </svg>
                </span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="enkomu-showcase__controls" aria-label="Navigation des fonctionnalités">
        <button
          className="enkomu-showcase__arrow"
          type="button"
          aria-label="Fonctionnalité précédente"
          onClick={() => showSlide(activeSlide - 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m14.5 5-7 7 7 7M8 12h11" />
          </svg>
        </button>
        <div className="enkomu-showcase__dots">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Afficher ${item.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          className="enkomu-showcase__arrow"
          type="button"
          aria-label="Fonctionnalité suivante"
          onClick={() => {
            if (trackIndex !== slides.length) {
              setTransitionEnabled(true);
              setTrackIndex(trackIndex + 1);
            }
          }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9.5 5 7 7-7 7M16 12H5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
