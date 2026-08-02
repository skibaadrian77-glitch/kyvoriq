const standards = [
  "Indywidualny kierunek wizualny",
  "Pełna responsywność",
  "Szybkie ładowanie",
  "Podstawowe SEO",
  "Przejrzysta ścieżka kontaktu",
  "Wsparcie po publikacji",
];

export default function Value() {
  return (
    <section className="border-t border-white/10 py-24 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-[10px] tracking-[0.24em] text-white/35">
              WHY KYVORIQ
            </p>

            <h2
              data-reveal
              className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl"
            >
              Wygląd przyciąga.

              <span className="block text-white/32">
                Strategia przekonuje.
              </span>
            </h2>
          </div>

          <div data-reveal-copy className="max-w-2xl lg:pt-11">
            <p className="text-lg leading-8 text-white/52 sm:text-xl sm:leading-9">
              Strona internetowa nie powinna być wyłącznie wizytówką. Powinna
              jasno prezentować wartość firmy, budować wiarygodność i ułatwiać
              klientowi wykonanie kolejnego kroku.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:mt-12 sm:grid-cols-2">
              {standards.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7669ff]" />

                  <span className="text-sm text-white/55">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}