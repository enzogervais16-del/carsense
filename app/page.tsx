import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { MapPin, Clock, Key, Lightbulb, Sparkles, Phone, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Coup de clés",
    description:
      "Nettoyage intérieur et extérieur complet de votre véhicule réalisé directement à votre domicile.",
    price: "79,99 €",
    badge: "Le plus populaire",
  },
  {
    icon: Lightbulb,
    title: "Rénovation de phares",
    description:
      "Restauration et polissage de vos optiques pour retrouver une visibilité et un éclairage optimaux.",
    price: "39,99 €",
    badge: null,
  },
  {
    icon: Sparkles,
    title: "Polissage carrosserie",
    description:
      "Élimination des micro-rayures et swirls marks pour une carrosserie miroir, brillante et protégée.",
    price: "199,99 €",
    badge: "Premium",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section id="accueil" className="bg-white pt-16">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-4">
              <span className="inline-block bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
                Service à domicile · 6j/7 · 9h – 20h
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#111111] leading-tight">
                Votre voiture,{" "}
                <span className="text-[#E31E24]">impeccable.</span>
                <br />
                À domicile.
              </h1>
              <p className="text-gray-500 text-base md:text-lg max-w-xl">
                Nettoyage · Lustrage · Protection céramique · Rénovation de
                phares — on se déplace chez vous en Gironde.
              </p>
              <a
                href="#prestations"
                className="mt-2 mb-10 inline-flex items-center gap-2 bg-[#E31E24] hover:bg-[#c41920] text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
              >
                Voir nos prestations <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          }
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1661439920547-65d827d1dbf5?w=1400&q=80"
            alt="Technicien en gants et tenue professionnelle nettoyant une voiture avec un chiffon microfibre"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </section>

      {/* ── PRESTATIONS ── */}
      <section id="prestations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E31E24]/10 text-[#E31E24] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Prestations à domicile
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111]">
              Nos Prestations
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Tous nos services sont réalisés directement chez vous, sans
              déplacement de votre part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="relative flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {service.badge && (
                    <span className="absolute top-6 right-6 bg-[#E31E24] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E31E24]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-3xl font-black text-[#E31E24]">
                      {service.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">TTC</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 w-full border-2 border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    Réserver <ChevronRight className="w-4 h-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Disponible 6j/7
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111]">
              Nous Contacter
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Prenez rendez-vous facilement. On se déplace chez vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Infos */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E31E24]" />
                </div>
                <div>
                  <p className="text-[#111111] font-semibold">Adresse</p>
                  <p className="text-gray-500 text-sm mt-1">
                    192 Avenue de Saint Médard
                    <br />
                    33320 Eysines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#E31E24]" />
                </div>
                <div>
                  <p className="text-[#111111] font-semibold">Horaires</p>
                  <p className="text-gray-500 text-sm mt-1">
                    6 jours sur 7
                    <br />
                    9h00 – 20h00
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-[#111111] text-2xl font-bold">
                Prêt à réserver ?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Contactez-nous pour planifier votre prestation. Nous nous
                déplaçons directement à votre adresse en Gironde.
              </p>
              <a
                href="tel:+33600000000"
                className="inline-flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#c41920] text-white font-bold py-4 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <a
                href="mailto:contact@carsense.fr"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-[#111111] font-semibold py-4 rounded-xl transition-colors text-sm"
              >
                Envoyer un e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black tracking-widest text-[#111111]">
            CAR<span className="text-[#E31E24]">SENSE</span>
          </span>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} CARSENSE – Nettoyage & Rénovation
            Automobile à Domicile · Eysines, Gironde
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#prestations" className="hover:text-gray-700 transition-colors">
              Prestations
            </a>
            <a href="#contact" className="hover:text-gray-700 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
