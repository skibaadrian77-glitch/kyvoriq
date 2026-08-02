"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const projectTypes = [
  { value: "strona-internetowa", label: "Strona internetowa" },
  { value: "landing-page", label: "Landing page" },
  { value: "sklep-internetowy", label: "Sklep internetowy" },
  { value: "portfolio", label: "Portfolio" },
  { value: "redesign", label: "Redesign obecnej strony" },
  { value: "inne", label: "Inny projekt" },
];

const budgets = [
  { value: "do-3000", label: "Do 3 000 zł" },
  { value: "3000-5000", label: "3 000–5 000 zł" },
  { value: "5000-10000", label: "5 000–10 000 zł" },
  { value: "powyzej-10000", label: "Powyżej 10 000 zł" },
  { value: "nie-wiem", label: "Jeszcze nie wiem" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey || status === "loading") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Nie udało się wysłać wiadomości.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Wystąpił błąd podczas wysyłania formularza.",
      );
    }
  }

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 bg-[#060608] py-24 sm:py-36"
    >
      <div className="pointer-events-none absolute bottom-[-28%] left-[-25%] h-[600px] w-[600px] rounded-full bg-[#6d5eff]/[0.08] blur-[155px] sm:left-[-12%] sm:h-[760px] sm:w-[760px] sm:blur-[185px]" />

      <div className="pointer-events-none absolute right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-[10px] tracking-[0.24em] text-white/35">
              START A PROJECT
            </p>

            <h2
              data-reveal
              className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl sm:leading-[0.95] sm:tracking-[-0.06em]"
            >
              Let’s create

              <span className="block text-white/32">
                something memorable.
              </span>
            </h2>

            <p
              data-reveal-copy
              className="mt-7 max-w-lg text-base leading-7 text-white/45 sm:mt-8 sm:text-lg sm:leading-8"
            >
              Opowiedz krótko, czego potrzebujesz. Może to być strona dla
              firmy, portfolio, landing page, projekt dla twórcy albo zupełnie
              inny pomysł. Odpowiemy z propozycją kierunku i kolejnymi krokami.
            </p>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:mt-14 sm:grid-cols-2">
              <div>
                <p className="text-[9px] tracking-[0.22em] text-white/25">
                  EMAIL
                </p>

                <a
                  href="mailto:kontakt@kyvoriq.pl"
                  className="mt-2 inline-block break-all text-lg transition hover:text-[#aaa3ff] sm:text-xl"
                >
                  kontakt@kyvoriq.pl
                </a>
              </div>

              <div>
                <p className="text-[9px] tracking-[0.22em] text-white/25">
                  ODPOWIEDŹ
                </p>

                <p className="mt-2 text-white/62">
                  Zwykle w ciągu 24 godzin
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10">
              <div className="bg-[#080808] p-6">
                <p className="text-3xl font-medium tracking-[-0.05em]">
                  100%
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Indywidualne podejście
                </p>
              </div>

              <div className="bg-[#080808] p-6">
                <p className="text-3xl font-medium tracking-[-0.05em]">
                  24h
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Standard odpowiedzi
                </p>
              </div>

              <div className="bg-[#080808] p-6">
                <p className="text-3xl font-medium tracking-[-0.05em]">
                  SEO
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Podstawy od początku
                </p>
              </div>

              <div className="bg-[#080808] p-6">
                <p className="text-3xl font-medium tracking-[-0.05em]">
                  Mobile
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Pełna responsywność
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.028] p-5 shadow-[0_35px_100px_rgba(0,0,0,.32)] backdrop-blur-xl sm:rounded-[34px] sm:p-10">
            {status === "success" ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#8075ff]/30 bg-[#6d5eff]/10 text-3xl text-[#aaa3ff]">
                  ✓
                </div>

                <p className="mt-8 text-[10px] tracking-[0.24em] text-white/30">
                  MESSAGE SENT
                </p>

                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Wiadomość wysłana.
                </h3>

                <p className="mt-5 max-w-sm text-base leading-7 text-white/45">
                  Dziękujemy za kontakt. Zapoznamy się z wiadomością i
                  odpowiemy możliwie szybko.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  className="mt-9"
                  onClick={() => setStatus("idle")}
                >
                  Wyślij kolejną wiadomość
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value={accessKey}
                />

                <input
                  type="hidden"
                  name="subject"
                  value="Nowe zapytanie ze strony KYVORIQ"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="KYVORIQ Website"
                />

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-7 sm:grid-cols-2">
                  <Input
                    required
                    label="IMIĘ"
                    name="name"
                    type="text"
                    placeholder="Jak masz na imię?"
                    autoComplete="name"
                  />

                  <Input
                    label="FIRMA / MARKA (OPCJONALNIE)"
                    name="company"
                    type="text"
                    placeholder="Nazwa lub pseudonim"
                    autoComplete="organization"
                  />
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <Input
                    required
                    label="EMAIL"
                    name="email"
                    type="email"
                    placeholder="twoj@email.pl"
                    autoComplete="email"
                  />

                  <Input
                    label="TELEFON (OPCJONALNIE)"
                    name="phone"
                    type="tel"
                    placeholder="+48 000 000 000"
                    autoComplete="tel"
                  />
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <Select
                    required
                    label="TYP PROJEKTU"
                    name="project_type"
                    options={projectTypes}
                  />

                  <Select
                    label="BUDŻET"
                    name="budget"
                    options={budgets}
                  />
                </div>

                <div className="mt-8">
                  <Input
                    as="textarea"
                    required
                    label="O PROJEKCIE"
                    name="message"
                    rows={6}
                    placeholder="Opisz swój pomysł, czego potrzebujesz i jaki efekt chcesz osiągnąć."
                  />
                </div>

                {!accessKey && (
                  <p className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-xs leading-5 text-amber-100/70">
                    Brakuje klucza Web3Forms. Formularz nie wyśle wiadomości,
                    dopóki zmienna środowiskowa nie zostanie dodana.
                  </p>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3"
                  >
                    <p className="text-sm font-medium text-red-100/85">
                      Nie udało się wysłać wiadomości.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-red-100/55">
                      {errorMessage ||
                        "Spróbuj ponownie za chwilę albo napisz bezpośrednio na kontakt@kyvoriq.pl."}
                    </p>
                  </div>
                )}

                <div className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-7 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-white/24">
                    Dane wykorzystamy wyłącznie do odpowiedzi na Twoje
                    zapytanie.
                  </p>

                  <Button
                    type="submit"
                    disabled={!accessKey || status === "loading"}
                    icon={status === "loading" ? undefined : "→"}
                    className="w-full min-w-[190px] sm:w-auto"
                  >
                    {status === "loading"
                      ? "Wysyłanie..."
                      : "Wyślij zapytanie"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}