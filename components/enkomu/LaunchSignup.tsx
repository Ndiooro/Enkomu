"use client";

import { type FormEvent, useState } from "react";

async function submitNewsletterSignup(email: string): Promise<void> {
  // Connect the launch mailing-list API here when it is available.
  void email;
}

export function LaunchSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValidEmail) {
      setHasError(true);
      setMessage("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    try {
      await submitNewsletterSignup(email.trim());
      setHasError(false);
      setMessage("Adresse validée. L’inscription sera disponible au lancement.");
    } catch (error) {
      setHasError(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer.",
      );
    }
  }

  return (
    <section className="enkomu-launch" id="inscription" aria-labelledby="launch-title">
      <div className="enkomu-launch__card">
        <h2 id="launch-title">Ne manquez pas le lancement</h2>
        <p>Soyez les premiers informés du lancement d&apos;Enkomu</p>
        <form className="enkomu-launch__form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="launch-email">
            Votre adresse email
          </label>
          <input
            id="launch-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={hasError}
            aria-describedby={message ? "launch-status" : undefined}
          />
          <button className="enkomu-button" type="submit">
            Rejoindre la liste
          </button>
        </form>
        {message && (
          <p
            className={`enkomu-launch__status${hasError ? " is-error" : ""}`}
            id="launch-status"
            role={hasError ? "alert" : "status"}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
