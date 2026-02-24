import React from 'react'
import { ShortVideosCarousel } from './ShortVideosCarousel'

const assets = {
  bg: "/public/assets/BG.png",
  ctaBg: "/public/assets/BG.png",
  avatar1: "/public/assets/LUCAS.png",
  avatar2: "/public/assets/RENATO.png",
  avatar6: "/public/assets/BRUNA.png",
  avatar7: "/public/assets/JULIANA.png",
  avatar8: "/public/assets/THIAGO.png",
  avatar9: "/public/assets/GUSTAVO.png",
  afterEffects: "/public/assets/Adobe After Effects.png",
  photoshop: "/public/assets/Adobe Photoshop.png",
  premiere: "/public/assets/Adobe Premiere.png",
  illustrator: "/public/assets/Adobe Illustrator.png",
  xd: "/public/assets/Adobe XD.png",
  blender: "public/assets/Blender.png",
  logo: "/public/assets/logo.svg",
  logotipo: "/public/assets/logotipo.svg",
}

const toolIcons = [
  assets.blender,
  assets.afterEffects,
  assets.photoshop,
  assets.premiere,
  assets.illustrator,
  assets.xd,
]
const toolIconsLoop = Array.from({ length: 4 }, () => toolIcons).flat()

const shortVideos = [
  {
    title: 'Reel 1',
    description:
      'Conteúdo profissional e impactante.',
    vimeoId: '1166956585',
  },
  {
    title: 'Reel 2',
    description:
      'Produção de alta qualidade e criatividade.',
    vimeoId: '1166514565',
  },
  {
    title: 'Reel 3',
    description:
      'Edição precisa e efeitos visuais dinâmicos.',
    vimeoId: '1107751041',
  },
  {
    title: 'Reel 4',
    description:
      'Storytelling envolvente e motion design impecável.',
    vimeoId: '1107750879',
  },
]

const serviceIcons = {
  video: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
      <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M18 8a3 3 0 0 0 -3 -3h-6a3 3 0 0 0 -3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3 -3v-8z" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  ),
  ad: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M11.933 5h-6.933v16h13v-8" />
      <path d="M14 17h-5" />
      <path d="M9 13h5v-4h-5z" />
      <path d="M15 5v-2" />
      <path d="M18 6l2 -2" />
      <path d="M19 9h2" />
    </svg>
  ),
  sparkles: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 6a6 6 0 0 1 6 6a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6" />
    </svg>
  ),
}

const services = [
  {
    title: 'VSLs e Lançamentos',
    description:
      'Roteiro, edição e motion focados em conversão. Clareza na mensagem e ritmo que mantém atenção.',
    icon: serviceIcons.video,
  },
  {
    title: 'YouTube e Podcasts',
    description:
      'Storytelling, cortes inteligentes e pacing para aumentar retenção e tempo de sessão.',
    icon: serviceIcons.youtube,
  },
  {
    title: 'Criativos para Anúncios',
    description:
      'Peças rápidas com variações de hook, headline e CTA para performance em Meta e TikTok.',
    icon: serviceIcons.ad,
  },
  {
    title: 'Animação e Motion',
    description:
      '2D e 3D com identidade visual consistente para elevar percepção e autoridade da marca.',
    icon: serviceIcons.sparkles,
  },
]

const testimonials = [
  {
    name: 'Lucas Xavier',
    role: 'Copywriter e Infoprodutor',
    quote:
      '“As VSLs ficaram diretas e hipnóticas. A taxa de retenção subiu e o pitch ficou muito mais claro.”',
    avatar: assets.avatar6,
  },
  {
    name: 'Marina Costa',
    role: 'Gerente de Marketing',
    quote:
      '“Os vídeos trouxeram uma identidade visual forte. A marca ficou mais premium e mais lembrada.”',
    avatar: assets.avatar1,
  },
  {
    name: 'Diego Henrique',
    role: 'Creator de Games',
    quote:
      '“A edição entrega adrenalina. Meu público ficou mais engajado e os comentários dispararam.”',
    avatar: assets.avatar2,
  },
  {
    name: 'Markus Klein',
    role: 'Empreendedor Global',
    quote:
      '“Fizemos vídeos em português e inglês para o mesmo projeto, e ele dominou os dois com precisão.”',
    avatar: assets.avatar7,
  },
  {
    name: 'Tiago Santos',
    role: 'CEO na MindTech',
    quote:
      '“A animação 2D elevou o nível da apresentação. Visualmente impecável.”',
    avatar: assets.avatar8,
  },
  {
    name: 'Gustavo R.',
    role: 'Streamer',
    quote:
      '“Editou meu canal por meses com consistência. Sempre com qualidade e entregando no tempo certo.”',
    avatar: assets.avatar9,
  },
]

const faqs = [
  {
    question: 'Qual é o prazo médio de entrega?',
    answer:
      'Depende do escopo. Shorts geralmente saem em poucos dias; vídeos longos e VSLs exigem etapas de roteiro, revisão e ajustes.',
  },
  {
    question: 'Vocês ajudam com roteiro e copy?',
    answer:
      'Sim. Podemos roteirizar do zero ou otimizar materiais existentes para deixar a narrativa mais clara e persuasiva.',
  },
  {
    question: 'Trabalham com pacotes mensais?',
    answer:
      'Trabalhamos com projetos avulsos e planos recorrentes. Definimos volume, prazos e prioridades juntos.',
  },
  {
    question: 'Quais formatos de entrega vocês fazem?',
    answer:
      'Entregamos nos formatos ideais para YouTube, Reels, TikTok, Meta Ads e VSLs, com variações quando necessário.',
  },
  {
    question: 'Como funciona o processo de aprovação?',
    answer:
      'Você recebe uma primeira versão, faz comentários e seguimos com ajustes rápidos até a aprovação final.',
  },
]

function VimeoEmbed({
  id,
  title,
  aspect = 'video',
}: {
  id: string
  title: string
  aspect?: 'video' | 'short'
}) {
  const aspectClass = aspect === 'short' ? 'aspect-[9/16]' : 'aspect-video'

  return (
    <div className={`w-full overflow-hidden rounded-2xl bg-black/20 ${aspectClass}`}>
      <iframe
        className="h-full w-full"
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title={title}
      />
    </div>
  )
}

export default function App() {
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('nome') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const project = String(formData.get('projeto') || '').trim()

    const message = `Olá, sou ${name || '...'}. Meu email é ${
      email || '...'
    }. Projeto: ${project || '...'}.`
    const url = `https://wa.me/5565993430686?text=${encodeURIComponent(
      message
    )}`

    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = url
    }
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-mist text-ink">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <img src={assets.logo} alt="MK Vision" className="h-9 w-9" />
            <span className="h-6 w-px bg-white/30" />
            <nav className="hidden items-center gap-6 text-sm text-white md:flex">
              <a className="transition hover:text-aqua" href="#shorts">
                Portfólio
              </a>
              <a className="transition hover:text-aqua" href="#servicos">
                Serviços
              </a>
              <a className="transition hover:text-aqua" href="#avaliacoes">
                Avaliações
              </a>
              <a className="transition hover:text-aqua" href="#faqs">
                FAQ
              </a>
              <a className="transition hover:text-aqua" href="#contato">
                Contato
              </a>
            </nav>
          </div>
          <a
            href="#contato"
            className="hidden rounded-xl bg-aqua px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 md:inline-flex"
          >
            Entre em contato
          </a>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="relative min-h-[760px] overflow-hidden bg-[#0b3b44] text-white">
          <div className="absolute inset-0">
            <img
              src={assets.bg}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b3b44]/70 via-[#0b3b44]/75 to-[#0b3b44]" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center">
            <span className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
              Estúdio MK Vision
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Visual que{' '}
              <span className="font-tiro italic text-sand">conecta</span> e
              converte
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/80 md:text-base">
              Transformamos ideias em vídeos que seguram atenção, elevam a
              percepção de marca e movem pessoas à ação. Edição, animação e
              estratégia no mesmo frame.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contato"
                className="rounded-xl bg-aqua px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Quero meu vídeo
              </a>
              <a
                href="#shorts"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-aqua hover:text-aqua"
              >
                Ver portfólio completo
              </a>
            </div>
          </div>

          <div className="relative z-10 bg-black/15 py-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Ferramentas
              </p>
              <div className="tools-marquee">
                <div className="tools-marquee__track">
                  {toolIconsLoop.map((icon, index) => (
                    <div
                      key={`tool-${index}`}
                      className="tools-marquee__item"
                      aria-hidden={index >= toolIcons.length}
                    >
                      <img src={icon} alt="" className="h-9 w-9" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shorts" className="py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
            <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
              Shorts
            </span>
            <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
              Shorts que param o scroll
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
              Conteúdo vertical pensado para gerar impacto nos primeiros segundos
              e manter retenção até o final. Ideal para Reels, TikTok e YouTube
              Shorts.
            </p>

            <div className="mt-12 w-full">
              <ShortVideosCarousel videos={shortVideos} VimeoEmbed={VimeoEmbed} />
            </div>
          </div>
        </section>

        <section id="longos" className="bg-white/60 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
                Longos
              </span>
              <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
                Vídeos longos com retenção real
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                Storytelling, ritmo e clareza para manter o público assistindo e
                conduzir a audiência até a ação. Perfeito para YouTube, VSLs e
                apresentações de produto.
              </p>
              <div className="mt-6 space-y-3 text-sm text-ink/70">
                <p>• Estrutura narrativa focada em retenção e conversão.</p>
                <p>• Motion e textos que reforçam a mensagem-chave.</p>
                <p>• Identidade visual consistente do início ao fim.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <VimeoEmbed id="760316775" title="Exemplo de vídeo longo" />
              <div className="rounded-2xl bg-sand p-4 text-sm text-ink/70">
                Dica: substitua este vídeo por outros exemplos longos quando
                quiser mostrar variedade de estilos ou segmentos.
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
            <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
              Serviços
            </span>
            <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
              Serviços completos de edição e animação
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
              Da estratégia ao acabamento final. Criamos conteúdo que vende,
              engaja e fortalece sua marca.
            </p>

            <div className="mt-12 grid w-full gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col gap-4 rounded-2xl bg-sand p-6 text-left shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua/20 text-aqua">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/70">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#0b3b44] p-10 text-white shadow-lg">
              <img
                src={assets.ctaBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b44]/90 to-[#0b3b44]/50" />
              <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                    Vamos conversar
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold md:text-4xl">
                    Pronto para elevar sua marca com vídeos que vendem?
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
                    Briefing simples, alinhamento rápido e entregas consistentes
                    para quem precisa crescer com vídeo.
                  </p>
                </div>
                <a
                  href="#contato"
                  className="rounded-xl bg-aqua px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  Começar projeto
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
            <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
              Avaliações
            </span>
            <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
              Clientes <span className="font-tiro italic">felizes</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
              Resultados reais para marcas que precisam se destacar em vídeo.
            </p>

            <div className="mt-12 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-2xl bg-sand p-6 text-left shadow-sm"
                >
                  <p className="text-sm text-ink/80">{testimonial.quote}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-ink/30 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-ink/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="pb-24">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-sand p-8 shadow-sm md:p-10">
              <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
                Contato
              </span>
              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                Vamos tirar seu projeto do papel
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                Conte o objetivo, o formato e o prazo. A gente responde rápido
                com um direcionamento claro.
              </p>

              <form className="mt-8 grid gap-4" onSubmit={handleContactSubmit}>
                <label className="grid gap-2 text-sm text-ink/80">
                  Nome
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm text-ink/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="voce@empresa.com"
                    className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm text-ink/80">
                  Qual projeto você quer?
                  <textarea
                    name="projeto"
                    placeholder="Ex: VSL de lançamento, shorts semanais, vídeo institucional..."
                    className="min-h-[140px] rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-aqua px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            <div className="rounded-3xl bg-[#0b3b44] p-8 text-white shadow-sm md:p-10">
              <span className="rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                Direto
              </span>
              <h3 className="mt-6 text-2xl font-semibold md:text-3xl">
                Prefere falar direto?
              </h3>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Manda mensagem em qualquer rede. Respondemos o quanto antes.
              </p>

              <div className="mt-8 grid gap-4 text-sm">
                <a
                  href="https://x.com/mkvisioon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-aqua hover:text-aqua"
                >
                  <span>X (Twitter)</span>
                  <span className="text-white/60">@mkvisioon</span>
                </a>
                <a
                  href="https://instagram.com/mkvisioon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-aqua hover:text-aqua"
                >
                  <span>Instagram</span>
                  <span className="text-white/60">@mkvisioon</span>
                </a>
                <a
                  href="mailto:contato@mkvisioon.com"
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-aqua hover:text-aqua"
                >
                  <span>Email</span>
                  <span className="text-white/60">contato@mkvisioon.com</span>
                </a>
                <a
                  href="https://wa.me/5565993430686"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-aqua hover:text-aqua"
                >
                  <span>WhatsApp</span>
                  <span className="text-white/60">+55 65 99343-0686</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="pb-24">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
            <span className="rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-ink/80">
              FAQs
            </span>
            <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
              Perguntas frequentes
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
              Tudo o que você precisa saber antes de começar o projeto.
            </p>

            <div className="mt-10 w-full space-y-4 text-left">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl bg-sand p-6 text-sm text-ink/80"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-ink">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-ink/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="rodape" className="bg-ocean px-6 py-14 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.6fr]">
          <div>
            <img src={assets.logotipo} alt="MK Vision" className="h-12" />
            <p className="mt-6 max-w-sm text-sm text-white/80">
              A MK Vision é um estúdio de edição e animação que transforma ideias
              em vídeos de impacto. Criamos conteúdo para YouTube, VSLs,
              anúncios e games, com foco em performance, estética e conversão.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Navegação</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <a href="#shorts" className="transition hover:text-aqua">
                Portfólio
              </a>
              <a href="#servicos" className="transition hover:text-aqua">
                Serviços
              </a>
              <a href="#avaliacoes" className="transition hover:text-aqua">
                Avaliações
              </a>
              <a href="#faqs" className="transition hover:text-aqua">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Contato</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <a href="https://instagram.com/mkvisioon" className="transition hover:text-aqua" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://x.com/mkvisioon" className="transition hover:text-aqua" target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
              <a href="mailto:contato@mkvisioon.com" className="transition hover:text-aqua">
                contato@mkvisioon.com
              </a>
              <a href="https://wa.me/5565993430686" className="transition hover:text-aqua" target="_blank" rel="noreferrer">
                WhatsApp +55 65 99343-0686
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/70 md:flex-row">
          <p>2026 MK Vision. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-aqua">
              Política de Privacidade
            </a>
            <a href="#" className="transition hover:text-aqua">
              Termos de Serviço
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
