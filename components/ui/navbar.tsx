import { Car } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2">
          <Car className="w-5 h-5 text-[#E31E24]" strokeWidth={2.5} />
          <span className="text-xl font-black tracking-widest text-white">
            CAR<span className="text-[#E31E24]">SENSE</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          <a href="#prestations" className="hover:text-white transition-colors">Prestations</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a
          href="#contact"
          className="bg-[#E31E24] hover:bg-[#c41920] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Réserver
        </a>
      </div>
    </nav>
  );
}
