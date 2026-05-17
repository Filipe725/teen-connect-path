
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, Heart, MessageCircle, AlertTriangle, CheckCircle2, Lock,
  Star, Sparkles, ArrowRight, Award, ChevronDown, Eye, TrendingDown,
  Zap, Users, BookOpen,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import { Reveal } from "@/components/ui/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conexão Segura — Identifique os Sinais Antes que Seja Tarde" },
      { name: "description", content: "O guia que já ajudou +4.200 famílias a identificar sinais ocultos e reconquistar o diálogo com adolescentes — sem brigas, sem afastamento, sem perder o filho." },
      { property: "og:title", content: "Conexão Segura — O Guia que Pode Salvar a Relação com Seu Filho" },
      { property: "og:description", content: "Identifique os sinais a tempo. Abra conversas reais. Reconquiste seu filho — antes que seja tarde demais." },
    ],
  }),
  component: SalesPage,
});

const CTA_URL = "https://pay.kiwify.com.br/Ylypjz8";

function CTAButton({ children, large = false, className = "" }: { children: React.ReactNode; large?: boolean; className?: string }) {
  return (
    <a
      href={CTA_URL}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_72)] to-[oklch(0.66_0.18_52)] text-[oklch(0.12_0.03_200)] font-bold tracking-tight shadow-[0_12px_40px_-8px_oklch(0.65_0.15_55_/_0.65)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_-8px_oklch(0.65_0.15_55_/_0.9)] animate-pulse-glow ${large ? "px-10 py-5 text-lg md:text-xl" : "px-7 py-4 text-base"} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 23, m: 47, s: 12 });
  useEffect(() => {
    const i = setInterval(() => {
      setT(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) h = 23;
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);
  const box = (n: number, l: string) => (
    <div className="flex flex-col items-center rounded-2xl bg-deep px-5 py-4 min-w-[80px] border border-gold/20">
      <span className="font-serif text-4xl font-bold text-gold tabular-nums">{String(n).padStart(2, "0")}</span>
      <span className="text-[10px] uppercase tracking-widest text-cream/60 mt-1">{l}</span>
    </div>
  );
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs uppercase tracking-widest text-cream/60 font-semibold">Oferta expira em</p>
      <div className="flex justify-center gap-3">
        {box(t.h, "Horas")}{box(t.m, "Min")}{box(t.s, "Seg")}
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left gap-4">
        <span className="font-serif text-lg font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="bg-deep/95 backdrop-blur-sm border-t border-gold/20 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] text-cream/60 leading-tight">Oferta de lançamento</p>
          <p className="font-serif font-bold text-gold text-xl leading-tight">
            R$ 47 <span className="text-xs font-normal text-cream/40 line-through ml-1">R$ 419</span>
          </p>
        </div>
        <a
          href={CTA_URL}
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_72)] to-[oklch(0.66_0.18_52)] text-[oklch(0.12_0.03_200)] font-bold px-5 py-3 text-sm animate-pulse-glow"
        >
          Garantir acesso <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function SalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingCTA />

      {/* Top urgency bar */}
      <div className="bg-deep px-4 py-3 text-center text-xs md:text-sm text-cream">
        <span className="inline-flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="h-3.5 w-3.5 text-gold flex-shrink-0" />
          <span>
            <strong className="text-gold">Atenção:</strong> Oferta de lançamento com 88% de desconto — apenas hoje
          </span>
        </span>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 pt-14 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <img src={heroFamily} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" /> Para pais que ainda têm tempo de agir
          </span>

          <h1 className="mt-7 font-serif text-4xl font-bold leading-[1.05] text-foreground md:text-[3.5rem] lg:text-[4.5rem]">
            Você sente que{" "}
            <span className="text-gradient-gold italic">seu filho está te escondendo algo</span>{" "}
             e o medo do que pode ser não te deixa dormir?
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            A maioria dos pais só age depois que o problema explode.{" "}
            <strong className="text-foreground">Os que protegem de verdade aprendem a ver o que está escondido</strong>{" "}
            — e a abrir conversas que pareciam impossíveis.
          </p>

          {/* Mini pre-qualifiers */}
          <div className="mt-8 mx-auto max-w-lg text-left bg-card/70 border border-border rounded-2xl p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-foreground mb-3 text-center">Você se identifica com algum desses sinais?</p>
            {[
              "Seu filho mudou de comportamento e você não consegue entender por quê",
              "Ele se fecha completamente toda vez que você tenta conversar",
              "Você tem medo de estar exagerando, ou de não estar e não agir",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 mb-2 last:mb-0">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton large>Quero proteger meu filho agora</CTAButton>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="h-3 w-3" /> Compra 100% segura</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3 w-3" /> Garantia de 7 dias</span>
              <span className="flex items-center gap-1.5"><Zap className="h-3 w-3" /> Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <div className="border-y border-border bg-secondary/50 px-5 py-8">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { n: "+4.200", l: "famílias atendidas" },
            { n: "93%", l: "notaram mudança em 7 dias" },
            { n: "27", l: "sinais mapeados" },
            { n: "R$ 47", l: "investimento único" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <p className="font-serif text-3xl font-bold text-gradient-gold md:text-4xl">{n}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-tight">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOOK / DOR ── */}
      <Section>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          <Reveal direction="up">
            <p className="font-serif text-2xl md:text-3xl text-foreground font-bold">
              Era 2h da manhã quando a porta abriu devagar.
            </p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p>
              Você ouviu. Ficou deitado, olhando pro teto, com aquele{" "}
              <em>peso familiar no peito</em>. Mais uma vez, sem conseguir dormir.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              Seu filho mudou. <strong className="text-foreground">Você sente nos ossos.</strong>{" "}
              Os amigos novos que ele nunca apresenta. O celular sempre virado para baixo.
              As respostas de uma sílaba. O olhar que escorrega para o lado quando você pergunta algo.
              O quarto que virou uma fortaleza com senha.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>
              E toda vez que você tenta conversar — com amor, com cuidado, com o coração na mão —
              qualquer pergunta vira ataque. Qualquer preocupação vira "controle". Qualquer cuidado
              vira porta batendo.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <div className="border-l-4 border-accent pl-6 py-2 my-4">
              <p className="font-serif text-2xl text-foreground italic">
                "Você não está louco(a). Não está exagerando. E não está sozinho(a) nesse medo."
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={500}>
            <p className="text-muted-foreground">
              Mais de <strong className="text-foreground">4.200 pais</strong> estavam exatamente onde você
              está agora. Com o mesmo frio na barriga. O mesmo desespero silencioso. A mesma pergunta
              que não para de voltar:{" "}
              <strong className="text-foreground italic">"Meu filho está se metendo com drogas?"</strong>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── DOR IDENTIFICAÇÃO ── */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-5xl">
            Se você reconhece algum desses momentos,{" "}
            <span className="text-gradient-gold">este guia foi escrito para você</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { i: AlertTriangle, t: "O medo que não vai embora", d: "Aquele frio na barriga toda vez que ele sai de casa. Você fica refém do celular, esperando uma mensagem que demora demais para chegar." },
            { i: Heart, t: "A culpa que corrói por dentro", d: '"Falhei como pai/mãe? Deveria ter percebido antes? Ainda dá tempo?" Essas perguntas não te deixam em paz.' },
            { i: MessageCircle, t: "As conversas que sempre viram briga", d: "Você abre a boca com amor genuíno. Ele responde com agressividade ou silêncio. E você fica sem saber o que fazer com isso." },
            { i: Lock, t: "A sensação de impotência total", d: "Você é pai. Você é mãe. Deveria saber proteger. Mas ninguém te preparou para esse momento específico." },
            { i: Eye, t: "Não saber se é paranoia", d: "É normal? É fase? Estou exagerando? A dúvida é tão dolorosa quanto a certeza — porque sem resposta, você não consegue agir." },
            { i: TrendingDown, t: "Ver tudo desmoronando", d: "Notas caindo. Novos amigos que você nunca conheceu. Humor instável. E a distância entre vocês crescendo a cada dia." },
          ].map(({ i: Icon, t, d }, index) => (
            <Reveal key={t} direction="up" delay={index * 90}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold">{t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── PROBLEMA INVISÍVEL ── */}
      <Section>
        <Reveal direction="up">
          <div className="rounded-3xl border-2 border-destructive/25 bg-destructive/5 p-7 md:p-10 mb-10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-destructive md:text-3xl">
                  O que nenhum pai quer ouvir — mas todos precisam saber
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                  Quando o problema vira manchete dentro de casa,{" "}
                  <strong>geralmente já passou dos 6 meses de uso oculto</strong>. O início é invisível.
                  Feito de pequenas mudanças que parecem "coisa de adolescente". Que somadas,
                  formam um padrão que ninguém te ensinou a enxergar.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            O verdadeiro problema não é a droga.{" "}
            <span className="text-gradient-gold">É o silêncio que a antecede.</span>
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
          <Reveal direction="up" delay={100}>
            <p>
              Mudança no grupo de amigos. Olheiras "do estudo". Apetite que some e volta. Dinheiro que
              falta sem explicação. Cheiros estranhos. Humor em montanha-russa. Sono invertido. Notas
              despencando. E — principalmente —{" "}
              <strong className="text-accent">
                a distância emocional que cresce a cada dia sem que você consiga entender por quê.
              </strong>
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              A maioria dos pais só reage quando algo acontece.{" "}
              <strong className="text-foreground">Os pais que protegem agem antes.</strong> Não com
              vigilância paranóica. Não com castigo. Não com sermão que faz adolescente se fechar
              ainda mais. Mas com <em>informação certa</em> e <em>conversa estratégica</em>.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── SOLUÇÃO / PRODUTO ── */}
      <Section className="bg-deep-radial text-cream">
        <div className="text-center">
          <Reveal direction="up">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              A solução que +4.200 pais usaram
            </span>
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl">
              Apresento o{" "}
              <span className="text-gradient-gold">Conexão Segura</span>
            </h2>
            <p className="mt-5 text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
              O único guia que combina{" "}
              <strong className="text-gold">identificação de sinais + método de diálogo</strong>{" "}
              em um sistema completo, aplicável ainda hoje.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-3xl py-6">
              <div className="absolute inset-0 bg-gold/10 blur-2xl" />
              <img
                src={ebookMockup}
                alt="Guia Conexão Segura"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative mx-auto max-w-sm drop-shadow-2xl"
              />
            </div>
          </Reveal>
          <div className="space-y-5 min-w-0">
            <Reveal direction="up">
              <p className="text-lg leading-relaxed text-cream/90">
                Um sistema completo, sensível e{" "}
                <strong className="text-gold">cientificamente embasado</strong> que combina:
              </p>
            </Reveal>
            <ul className="space-y-4">
              {[
                { t: "Mapa dos 27 Sinais", d: "Comportamentais, físicos e emocionais — aprenda a enxergar o que estava invisível." },
                { t: "Método Diálogo Sem Barreiras", d: "Substitui interrogatório por conexão real. Seu filho abre a guarda sem perceber." },
                { t: "40 Perguntas Estratégicas", d: "Feitas para revelar sem acusar. Abrem conversas que pareciam impossíveis." },
                { t: "Protocolos para 6 Cenários", d: "Descoberta, recaída, confronto, negação, escola, amigos. Você sabe o que fazer em cada um." },
              ].map(({ t, d }, i) => (
                <Reveal key={t} direction="up" delay={i * 100}>
                  <li className="flex gap-3 min-w-0">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-cream/90 min-w-0 break-words">
                      <strong className="text-gold">{t}:</strong> {d}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal direction="up" delay={400}>
              <CTAButton>Quero o guia agora</CTAButton>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── O QUE TEM DENTRO ── */}
      <Section>
        <Reveal direction="up">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">Tudo que você vai encontrar dentro</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Conteúdo prático, direto e aplicável ainda hoje.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { n: "01", t: "O Mapa dos 27 Sinais", d: "Tudo que pais ignoram por achar que é 'fase'. Separado por categoria: comportamental, físico e emocional, com escala de urgência para cada sinal.", tag: "Identificação" },
            { n: "02", t: "Método Diálogo Sem Barreiras", d: "A técnica que desarma o adolescente antes de você abrir a boca. Baseada em entrevista motivacional e comunicação não-violenta.", tag: "Diálogo" },
            { n: "03", t: "Roteiro de 40 Perguntas", d: "Perguntas testadas com famílias reais. Não soam como interrogatório. São feitas para revelar a verdade sem gerar defesa ou negação.", tag: "Comunicação" },
            { n: "04", t: "Checklist Semanal", d: "Um rastreador simples que você preenche em 5 minutos. Identifica padrões antes que se tornem crises.", tag: "Acompanhamento" },
            { n: "05", t: "Protocolos de Crise", d: "O que dizer — e o que NUNCA dizer — nos 6 momentos mais delicados. Com scripts prontos para você não travar na hora H.", tag: "Urgência" },
            { n: "06", t: "Plano de Reconexão em 21 Dias", d: "Passo a passo diário para reconstruir a ponte emocional com seu filho — mesmo que ela pareça completamente destruída.", tag: "Reconexão" },
          ].map(({ n, t, d, tag }, index) => (
            <Reveal key={n} direction="up" delay={index * 90}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-4xl font-bold text-gradient-gold">{n}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{tag}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold group-hover:text-accent transition-colors duration-300">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── POR QUE FUNCIONA ── */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            Por que funciona quando{" "}
            <span className="text-gradient-gold">tudo que você já tentou não funcionou</span>
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
          <Reveal direction="up" delay={100}>
            <p>
              O cérebro adolescente é neurologicamente programado para resistir à autoridade. Quando você
              pergunta diretamente <em>"você está usando alguma coisa?"</em> — o cérebro dele aciona modo
              de defesa antes mesmo de processar a pergunta. Resultado: porta fechada, fone no ouvido,
              conversa morta.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              O roteiro do <strong>Conexão Segura</strong> foi construído com base em{" "}
              <strong>entrevista motivacional</strong>, <strong>escuta ativa</strong> e{" "}
              <strong>comunicação não-violenta</strong> — três das metodologias mais eficazes para quebrar
              resistência em adolescentes, adaptadas para a realidade de uma conversa real, na mesa do
              jantar, no carro, no sofá.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>
              Você não vai parecer terapeuta. Não vai parecer policial.{" "}
              <strong className="text-accent">Você vai ser o porto seguro que ele sempre precisou</strong>{" "}
              — e é exatamente aí que a verdade começa a aparecer.
            </p>
          </Reveal>
        </div>
        <Reveal direction="up" delay={400}>
          <div className="mt-10 flex justify-center">
            <CTAButton>Quero aprender o método agora</CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* ── TRANSFORMAÇÃO ── */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">
            A vida antes. A vida depois.
          </h2>
          <p className="text-center mt-3 text-muted-foreground text-lg">
            Em 7 dias aplicando o método, isso é o que muda:
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal direction="up" delay={100}>
            <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-7 h-full">
              <h3 className="font-serif text-xl font-semibold text-destructive flex items-center gap-2">
                <span className="text-2xl"></span> Hoje, sem o guia
              </h3>
              <ul className="mt-5 space-y-3.5 text-foreground/80">
                {[
                  "Insônia e angústia constante sem saber o que está acontecendo",
                  "Conversas que sempre viram brigas ou silêncio doloroso",
                  "Sensação de estar perdendo seu filho para um mundo que você não conhece",
                  "Não saber distinguir paranoia de intuição real",
                  "Medo paralisante de fazer a coisa errada e afastar ainda mais",
                  "Culpa que não sai — mesmo sem ter feito nada de errado",
                ].map(x => (
                  <li key={x} className="flex gap-2.5 text-sm">
                    <span className="text-destructive font-bold mt-0.5 flex-shrink-0">✕</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-7 h-full">
              <h3 className="font-serif text-xl font-semibold text-accent flex items-center gap-2">
                <span className="text-2xl"></span> Em 7 dias, com o guia
              </h3>
              <ul className="mt-5 space-y-3.5 text-foreground/90">
                {[
                  "Clareza total para enxergar o que antes era invisível e confuso",
                  "Conversas verdadeiras — sem briga, sem defesa, sem porta batendo",
                  "Confiança para agir com firmeza, amor e sem se sentir perdido(a)",
                  "Plano de ação concreto para qualquer cenário que aparecer",
                  "A paz de saber que está fazendo o que pode — e da forma certa",
                  "Seu filho te procurando — ao invés de fugir de você",
                ].map(x => (
                  <li key={x} className="flex gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── AUTORIDADE ── */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="mx-auto h-32 w-32 rounded-full bg-deep flex items-center justify-center shadow-xl flex-shrink-0">
              <Award className="h-14 w-14 text-gold" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Quem está por trás do guia</span>
              <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
                Mais de uma década ajudando famílias reais
              </h2>
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                Este guia foi desenvolvido com base em{" "}
                <strong>mais de 10 anos de experiência prática</strong> em orientação familiar, prevenção ao
                uso de substâncias e comunicação com adolescentes — em parceria com psicólogos, terapeutas
                familiares e, principalmente,{" "}
                <strong>pais que viveram na pele cada um dos cenários</strong> que você vai aprender a
                enfrentar.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {["Psicologia Positiva", "Comunicação Não-Violenta", "Entrevista Motivacional", "Neurociência Adolescente"].map(tag => (
                  <span key={tag} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── DEPOIMENTOS ── */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">
            Pais reais. Resultados reais.
          </h2>
          <p className="text-center mt-3 text-muted-foreground">
            O que aconteceu depois que decidiram agir:
          </p>
        </Reveal>

        {/* Depoimento destaque */}
        <Reveal direction="up" delay={100}>
          <div className="mt-10 rounded-3xl border-2 border-accent/30 bg-accent/5 p-8 md:p-10">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "Eu estava prestes a internar meu filho. Uma amiga me mandou esse guia. Em 3 semanas, ele me
              contou tudo voluntariamente — sem pressão, sem briga. Hoje está em tratamento, por escolha
              própria. Este guia salvou minha família."
            </p>
            <div className="mt-7 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="font-serif font-bold text-accent text-lg">M</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Mariana S., 47</p>
                <p className="text-sm text-muted-foreground">Mãe do Lucas, 17 — São Paulo</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { n: "Ana Lúcia, 44", c: "Mãe do Pedro, 15 — Curitiba", t: "Em duas semanas usando o roteiro, tivemos a primeira conversa verdadeira em quase um ano. Eu chorei. Ele também. E pela primeira vez em meses, me senti mãe de novo.", i: "A" },
            { n: "Carlos Eduardo, 51", c: "Pai da Sofia, 16 — Belo Horizonte", t: "Eu vivia com medo de tocar no assunto e estragar tudo. O guia me deu palavras certas e calma para escutar. Hoje minha filha vem ME procurar para conversar.", i: "C" },
            { n: "Patrícia, 38", c: "Mãe de gêmeos, 14 — Rio de Janeiro", t: "Identifiquei sinais que vinha ignorando há meses sem perceber. Agi sem brigar, sem invadir, sem destruir nossa relação. Esse guia chegou na hora exata.", i: "P" },
          ].map((d, index) => (
            <Reveal key={d.n} direction="up" delay={index * 130}>
              <div className="flex flex-col rounded-2xl border border-border bg-card p-6 h-full">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="flex-1 text-foreground/90 leading-relaxed italic text-sm">"{d.t}"</p>
                <div className="mt-5 border-t border-border pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-accent text-sm">{d.i}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{d.n}</p>
                    <p className="text-xs text-muted-foreground">{d.c}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── OFERTA ── */}
      <section id="oferta" className="bg-deep-radial px-5 py-20 text-cream md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              Oferta especial de lançamento
            </span>
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl">
              Tudo isso por{" "}
              <span className="text-gradient-gold">menos do que uma pizza</span>
            </h2>
            <p className="mt-4 text-cream/75 text-lg">Esta oferta expira em:</p>
          </Reveal>
          <div className="mt-6"><Countdown /></div>

          <Reveal direction="up" delay={100}>
            <div className="mt-10 rounded-3xl border border-gold/30 bg-white/5 p-8 text-left backdrop-blur-sm md:p-10">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-7">
                <h3 className="font-serif text-2xl font-bold text-gold md:text-3xl">
                  Conexão Segura — Pacote Completo
                </h3>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold uppercase tracking-wider">
                  Mais popular
                </span>
              </div>
              <ul className="space-y-3.5">
                {[
                  ["Guia Completo em PDF ", "R$ 197"],
                  ["Roteiro de 40 Perguntas Estratégicas", "R$ 87"],
                  ["Checklist dos 27 Sinais (para imprimir)", "R$ 47"],
                  ["BÔNUS: Webinar 'Como Manter a Calma em Crise'", "R$ 49"],
                  ["BÔNUS: Mini-guia 'Resiliência do Adolescente'", "R$ 39"],
                ].map(([t, v]) => (
                  <li key={t as string} className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3.5">
                    <span className="text-cream/90 text-sm">{t}</span>
                    <span className="text-cream/45 line-through text-sm flex-shrink-0">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 text-center">
                <p className="text-cream/55 text-sm">Valor total real: <span className="line-through">R$ 419</span></p>
                <p className="mt-1.5 text-sm text-cream/80 font-medium">Seu investimento hoje:</p>
                <p className="mt-2 font-serif text-7xl font-bold text-gradient-gold md:text-8xl">R$ 47</p>
                <p className="mt-1.5 text-sm text-cream/65">à vista — ou 4x de R$ 12,79 sem juros</p>
                <p className="mt-1 text-xs text-gold/80 font-semibold">↓ Economia de 88% por tempo limitado ↓</p>
                <div className="mt-8"><CTAButton large>Garantir meu acesso agora</CTAButton></div>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-cream/45">
                  <span className="flex items-center gap-1.5"><Lock className="h-3 w-3" /> Pagamento seguro</span>
                  <span className="flex items-center gap-1.5"><Zap className="h-3 w-3" /> Acesso imediato por e-mail</span>
                  <span className="flex items-center gap-1.5"><Shield className="h-3 w-3" /> Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GARANTIA ── */}
      <Section>
        <Reveal direction="up">
          <div className="rounded-3xl border-2 border-accent/40 bg-accent/5 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
              <div className="flex h-28 w-28 flex-shrink-0 flex-col items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl">
                <Shield className="h-10 w-10" />
                <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">7 dias</span>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  Risco zero. Garantia incondicional de 7 dias.
                </h2>
                <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                  Leia. Aplique. Sinta a diferença. Se em 7 dias você achar que o{" "}
                  <strong>Conexão Segura</strong> não valeu — por qualquer motivo, sem precisar de
                  explicação, basta um e-mail e devolvemos{" "}
                  <strong>100% do seu investimento</strong>. Sem perguntas. Sem burocracia. Sem enrolação.
                </p>
                <p className="mt-4 text-accent font-semibold italic text-lg">
                  O risco é todo nosso. O seu filho não pode esperar.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── QUEBRA DE OBJEÇÕES ── */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">"Mas e se…?"</h2>
          <p className="text-center mt-3 text-muted-foreground">Suas dúvidas respondidas com honestidade.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { q: '"Meu filho nunca faria isso."', a: "É exatamente o que pensa toda família — até o dia que pensa diferente. Este guia não nasce da desconfiança. Nasce do amor preventivo. Pais informados protegem antes de precisar reagir." },
            { q: '"Não quero invadir a privacidade dele."', a: "E você não vai. O método ensina a observar e dialogar — não a vigiar. É construir confiança, não muros. Seu filho vai sentir a diferença." },
            { q: '"Tenho medo de estragar tudo."', a: "O que estraga relações é o silêncio acumulado e a abordagem errada. Aqui você aprende o oposto: o caminho que aproxima em vez de afastar." },
            { q: '"Já tentei conversar e ele se fechou."', a: "Por isso o roteiro existe. Ele foi construído justamente para contornar o gatilho de defesa que faz adolescente fechar a porta. É diferente de tudo que você já tentou." },
            { q: '"E se o problema for mais grave?"', a: "Existe um capítulo específico para isso, com protocolo passo a passo — o que dizer, o que fazer e o que evitar nos primeiros dias de uma descoberta grave." },
            { q: '"Vale R$ 47?"', a: "Uma sessão com psicólogo custa entre R$ 150 e R$ 300. Uma internação, entre R$ 5.000 e R$ 30.000. Este guia custa menos de R$ 50 e pode evitar os dois." },
          ].map(({ q, a }, index) => (
            <Reveal key={q} direction="up" delay={index * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-all duration-300 h-full">
                <h3 className="font-serif text-lg font-semibold text-accent">{q}</h3>
                <p className="mt-2 text-foreground/85 leading-relaxed text-sm">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">Perguntas frequentes</h2>
        </Reveal>
        <div className="mt-10">
          {[
            { q: "Como recebo o material após a compra?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com acesso ao guia em PDF, ao roteiro de perguntas, ao checklist e aos bônus. Tudo em um só lugar." },
            { q: "Funciona para qualquer idade de adolescente?", a: "Sim. O conteúdo foi pensado para pais de filhos entre 11 e 19 anos, com orientações adaptadas por faixa etária dentro do próprio guia." },
            { q: "Preciso de conhecimento em psicologia?", a: "Nenhum. O guia foi escrito em linguagem clara, com exemplos reais e passo a passo. Qualquer pai ou mãe consegue aplicar desde o primeiro dia." },
            { q: "Meu filho vai perceber que estou usando um método?", a: "Não. As perguntas e abordagens parecem conversas completamente naturais — esse é justamente o segredo do método Diálogo Sem Barreiras." },
            { q: "E se eu já desconfio de algo concreto?", a: "Existe um capítulo dedicado exatamente a esse cenário, com protocolo passo a passo — o que dizer, o que fazer e o que evitar nos primeiros dias após uma suspeita ou descoberta." },
            { q: "Posso pedir reembolso?", a: "Sim, sem nenhuma complicação. 7 dias de garantia incondicional. Um e-mail é suficiente para receber 100% do valor de volta, sem perguntas." },
          ].map((f, index) => (
            <Reveal key={f.q} direction="up" delay={index * 60}>
              <FAQItem {...f} />
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={400}>
          <div className="mt-12 flex justify-center">
            <CTAButton large>Quero começar agora — R$ 47</CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* ── FECHAMENTO EMOCIONAL ── */}
      <section className="bg-deep-radial px-5 py-20 text-cream md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <Heart className="mx-auto h-14 w-14 text-gold" />
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl leading-tight">
              Daqui a um ano, você vai olhar para trás e{" "}
              <span className="text-gradient-gold">agradecer ter agido hoje.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-cream/85 leading-relaxed">
              Existem dois caminhos a partir desta página.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/85 leading-relaxed">
              No primeiro, você fecha esta aba, volta para o dia, e a preocupação continua roendo por
              dentro — só que agora com a culpa silenciosa de não ter agido quando tinha a chance.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/85 leading-relaxed">
              No segundo, você toma uma decisão pequena e poderosa — por menos de R$ 50. Você se equipa.
              Você aprende a ver. Você aprende a conversar. E na próxima vez que seu filho passar pela
              porta, ele vai sentir — sem precisar saber por quê —{" "}
              <strong className="text-gold">que tem alguém realmente vendo ele de verdade</strong>.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6">
              <p className="font-serif text-2xl text-gold italic leading-relaxed">
                "Seu filho não precisa de pais perfeitos. Precisa de pais presentes — e preparados."
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <div className="mt-10"><CTAButton large>Quero estar presente agora — R$ 47</CTAButton></div>
            <p className="mt-6 text-sm text-cream/45 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-1.5"><Lock className="h-3 w-3" /> Compra segura</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3 w-3" /> Garantia de 7 dias</span>
              <span className="flex items-center gap-1.5"><Zap className="h-3 w-3" /> Acesso imediato</span>
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="bg-deep px-5 py-10 text-center text-xs text-cream/45">
        <p className="font-semibold text-cream/65">© Conexão Segura. Todos os direitos reservados.</p>
        <p className="mt-2 max-w-2xl mx-auto leading-relaxed">
          Este material tem caráter educativo e preventivo. Não substitui acompanhamento profissional
          especializado em casos de uso ou dependência de substâncias. Em situações de risco imediato,
          procure ajuda profissional especializada.
        </p>
        <p className="mt-4">
          <a href={CTA_URL} className="text-gold hover:underline font-medium">
            Adquirir o guia — R$ 47
          </a>
        </p>
      </footer>

      {/* Espaço para floating CTA no mobile */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
