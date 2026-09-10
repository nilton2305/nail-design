import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

const services = [
  {
    name: "Manicure tradicional",
    desc: "Cutilagem, lixamento e esmaltação comum nas mãos.",
    price: "R$ 30",
    swatch: "bg-pink-300",
    img: "https://images.pexels.com/photos/939835/pexels-photo-939835.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Pedicure tradicional",
    desc: "Cuidado completo para os pés, com esfoliação e esmaltação.",
    price: "R$ 35",
    swatch: "bg-rose-300",
    img: "https://images.pexels.com/photos/17056221/pexels-photo-17056221.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Esmaltação em gel",
    desc: "Acabamento espelhado que dura semanas sem lascar.",
    price: "R$ 55",
    swatch: "bg-fuchsia-300",
    img: "https://images.pexels.com/photos/4677845/pexels-photo-4677845.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Alongamento em fibra de vidro",
    desc: "Unhas alongadas e resistentes, com formato personalizado.",
    price: "R$ 120",
    swatch: "bg-rose-400",
    img: "https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Nail art / decoração",
    desc: "Desenhos, pedrarias e detalhes personalizados por unha.",
    price: "a partir de R$ 5",
    swatch: "bg-pink-400",
    img: "https://images.pexels.com/photos/34885842/pexels-photo-34885842.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Combo mãos e pés",
    desc: "Manicure e pedicure tradicionais no mesmo horário.",
    price: "R$ 60",
    swatch: "bg-rose-200",
    img: "https://images.pexels.com/photos/34835286/pexels-photo-34835286.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const gallery = [
  "https://images.pexels.com/photos/34835283/pexels-photo-34835283.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/20758448/pexels-photo-20758448.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/34885842/pexels-photo-34885842.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export default function NaynaNails() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-rose-50 text-stone-800 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,600&family=Jost:wght@400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Jost', sans-serif; }
        .scallop::before {
          content: "";
          position: absolute;
          inset: -14px -14px auto auto;
          width: 120px;
          height: 120px;
          border-radius: 9999px;
          background: #fbcfe8;
          z-index: -1;
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-rose-50/90 backdrop-blur border-b border-rose-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-body">
          <a href="#top" className="font-display text-2xl italic text-rose-900">
            Nayna <span className="not-italic text-pink-500">Nails</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-stone-600">
            <a href="#servicos" className="hover:text-rose-900">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-rose-900">
              Sobre
            </a>
            <a href="#galeria" className="hover:text-rose-900">
              Galeria
            </a>
            <a href="#contato" className="hover:text-rose-900">
              Agendar
            </a>
          </nav>
          <button
            className="md:hidden w-10 h-10 grid place-items-center border border-rose-300 rounded-full text-rose-900"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-rose-50 border-t border-rose-200 font-body">
            {[
              ["servicos", "Serviços"],
              ["sobre", "Sobre"],
              ["galeria", "Galeria"],
              ["contato", "Agendar"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 border-t border-rose-200 text-sm text-stone-700"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="font-body">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-rose-700 bg-rose-100 px-3 py-1.5 rounded-full mb-5">
                <Sparkles size={13} /> Nail designer
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-rose-900 leading-tight mb-5">
                Cuidado e arte na ponta dos dedos
              </h1>
              <p className="text-stone-600 text-lg max-w-md mb-8">
                Sou a Nayna. Faço manicure, pedicure, alongamento e nail art com
                atenção aos detalhes, pra suas unhas ficarem lindas por semanas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="px-6 py-3 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition"
                >
                  Agendar horário
                </a>
                <a
                  href="#servicos"
                  className="px-6 py-3 rounded-full border border-rose-300 text-rose-900 text-sm font-medium hover:bg-rose-100 transition"
                >
                  Ver serviços e valores
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-200 rounded-[2.5rem] -z-10 rotate-2" />
              <img
                src="https://images.pexels.com/photos/34835283/pexels-photo-34835283.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Manicure rosa com glitter, close-up"
                className="rounded-[2.5rem] w-full h-80 md:h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          id="servicos"
          className="py-20 bg-white border-y border-rose-100"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-md mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-rose-900 mb-3">
                Serviços e valores
              </h2>
              <p className="text-stone-600">
                Cada cor ao lado do serviço é só um toque visual — no dia, você
                escolhe o esmalte que quiser.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col sm:flex-row gap-4 border border-rose-100 rounded-2xl p-4 hover:border-rose-300 transition"
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-40 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${s.swatch}`}
                        />
                        <h3 className="font-medium text-stone-800">{s.name}</h3>
                      </div>
                      <span className="text-rose-700 font-semibold text-sm whitespace-nowrap">
                        {s.price}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[0.9fr_1fr] gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-rose-200 rounded-[2rem] -z-10 -rotate-2" />
              <img
                src="https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Nail designer aplicando esmalte em uma cliente"
                className="rounded-[2rem] w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-rose-900 mb-4">
                Sobre a Nayna
              </h2>
              <p className="text-stone-600 mb-4">
                Trabalho com manicure e nail design cuidando de cada detalhe: da
                cutilagem ao acabamento final. Gosto de ouvir o que você quer
                antes de sugerir o melhor formato, cor ou técnica pras suas
                unhas.
              </p>
              <p className="text-stone-600">
                Atendo com hora marcada, em ambiente tranquilo e higienizado,
                com materiais próprios e esterilizados a cada cliente.
              </p>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section
          id="galeria"
          className="py-20 bg-white border-y border-rose-100"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-md mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-rose-900 mb-3">
                Trabalhos recentes
              </h2>
              <p className="text-stone-600">
                Um pouco do que sai daqui, direto pras suas mãos.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Trabalho de nail art ${i + 1}`}
                  className="rounded-xl w-full h-40 md:h-48 object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-rose-900 mb-4">
                Agende seu horário
              </h2>
              <p className="text-stone-600 max-w-md mb-7">
                Chama no WhatsApp com o dia e horário que prefere, ou dá uma
                olhada nos trabalhos mais recentes no Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5585992308639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-pink-500 text-white text-sm font-medium flex items-center gap-2 hover:bg-pink-600 transition"
                >
                  <MessageCircle size={18} /> Chamar no WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/nayna_nails_designer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-rose-300 text-rose-900 text-sm font-medium flex items-center gap-2 hover:bg-rose-100 transition"
                >
                  <Instagram size={18} /> @nayna_nails_designer
                </a>
              </div>
            </div>
            <div className="bg-white border border-rose-100 rounded-2xl p-7">
              <div className="flex items-start gap-3 py-3 border-b border-rose-100">
                <Clock size={18} className="text-rose-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-stone-800">
                    Horário de atendimento
                  </p>
                  <p className="text-sm text-stone-500">
                    Terça a sábado, 9h às 18h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3 border-b border-rose-100">
                <MapPin size={18} className="text-rose-500 mt-0.5" />
                <div className="flex gap-3">
                  <div>
                    <p className="text-sm font-medium text-stone-800">
                      Endereço
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua%20Lírio%20do%20Vale%20133B%2C%20Senador%20Carlos%20Jereissati%2C%20Pacatuba%20-%20CE%2C%2061814-392"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-stone-500 hover:text-rose-600 transition"
                    >
                      Rua Lírio do Vale, 133B
                      <br />
                      Senador Carlos Jereissati, Pacatuba - CE
                      <br />
                      CEP 61814-392
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3">
                <MessageCircle size={18} className="text-rose-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-stone-800">WhatsApp</p>
                  <p className="text-sm text-stone-500">(85) 992308639</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-200 py-7 font-body">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-between gap-2 text-xs text-stone-500">
          <span>Nayna Nails. Unhas feitas com carinho.</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
