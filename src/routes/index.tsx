
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, Heart, MessageCircle, AlertTriangle, CheckCircle2, Lock,
  Clock, Star, Sparkles, ArrowRight, BookOpen, Users, Gift, Award, ChevronDown
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import { Reveal } from "@/components/ui/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conexão Segura — Guia para Pais de Adolescentes | Identifique sinais a tempo" },
      { name: "description", content: "Aprenda a reconhecer sinais ocultos de envolvimento com drogas e converse com seu filho adolescente sem brigas, afastamento ou resistência. Método Diálogo Sem Barreiras." },
      { property: "og:title", content: "Conexão Segura — O Guia que Pode Mudar a História do Seu Filho" },
      { property: "og:description", content: "Identifique sinais a tempo. Converse sem confronto. Reconquiste a confiança do seu adolescente." },
    ],
  }),
  component: SalesPage,
});

const CTA_URL = "https://pay.kiwify.com.br/Ylypjz8";

function CTAButton({ children, large = false, className = "" }: { children: React.ReactNode; large?: boolean; className?: string }) {
  return (
    <a
      href={CTA_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.78_0.14_70)] to-[oklch(0.65_0.15_55)] text-[oklch(0.18_0.03_200)] font-bold tracking-tight shadow-[0_10px_40px_-10px_oklch(0.65_0.15_55_/_0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_oklch(0.65_0.15_55_/_0.8)] animate-pulse-glow ${large ? "px-8 py-5 text-lg md:text-xl" : "px-6 py-3.5 text-base"} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-5 py-16 md:py-24 ${className}`}><div className="mx-auto max-w-4xl">{children}</div></section>;
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
    <div className="flex flex-col items-center rounded-xl bg-deep px-4 py-3 min-w-[72px]">
      <span className="font-serif text-3xl font-bold text-gold">{String(n).padStart(2, "0")}</span>
      <span className="text-[10px] uppercase tracking-widest text-cream/70">{l}</span>
    </div>
  );
  return <div className="flex justify-center gap-3">{box(t.h, "Horas")}{box(t.m, "Min")}{box(t.s, "Seg")}</div>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="font-serif text-lg font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 text-accent transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

function SalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Top bar */}
      <div className="bg-deep px-4 py-2.5 text-center text-xs md:text-sm text-cream">
        <span className="inline-flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold" /> Oferta de lançamento — desconto válido apenas hoje</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <img src={heroFamily} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> Para pais e mães de adolescentes
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Você sente que <span className="text-gradient-gold italic">algo está diferente</span> com seu filho e o medo não te deixa dormir?
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Descubra os <strong className="text-foreground">sinais ocultos</strong> que podem indicar envolvimento com drogas e o roteiro de perguntas que abre o coração do seu adolescente <strong className="text-foreground">sem brigas, sem confronto e sem afastamento</strong>.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton large>Quero proteger meu filho agora</CTAButton>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Lock className="h-3.5 w-3.5" /> Compra 100% segura · Garantia incondicional de 7 dias
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Acesso imediato</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Material 100% digital</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> +3.700 famílias atendidas</span>
          </div>
        </div>
      </section>

      {/* HOOK / DOR */}
      <Section>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          <Reveal direction="up">
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              Era 2h da manhã. Você ouviu a porta abrir devagar.
            </p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p>
              Olhou para o teto, sentiu aquele <em>aperto familiar no peito</em> e percebeu que, mais uma vez, não conseguiria voltar a dormir.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              Seu filho mudou. <strong>Você sente.</strong> Os amigos novos que ele não te apresenta. O celular sempre virado para baixo. As respostas curtas. O olhar que desvia. O quarto que virou fortaleza.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>
              E quando você tenta conversar, qualquer pergunta vira ataque, qualquer cuidado vira "controle", qualquer preocupação vira porta batendo.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="font-serif text-2xl text-accent italic">
              Você não está louco(a). Você não está exagerando. E você definitivamente não está sozinho(a).
            </p>
          </Reveal>
        </div>
      </Section>

      {/* IDENTIFICAÇÃO COM A DOR */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-5xl">
            Se você reconhece isso aqui, este guia foi escrito <span className="text-gradient-gold">para você</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { i: AlertTriangle, t: "O medo silencioso", d: "Aquele frio na barriga toda vez que ele sai de casa e você fica refém do celular esperando notícias." },
            { i: Heart, t: "A culpa que não cala", d: "Será que falhei? Será que eu deveria ter percebido antes? Será que ainda dá tempo?" },
            { i: MessageCircle, t: "As conversas que viram briga", d: "Você abre a boca com amor e ele responde com agressividade. E você fica sem saber o que fazer." },
            { i: Lock, t: "A sensação de impotência", d: "Você é mãe/pai. Devia saber proteger. Mas a verdade é que ninguém te ensinou a lidar com isso." },
          ].map(({ i: Icon, t, d }, index) => (
            <Reveal key={t} direction="up" delay={index * 120}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-serif text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROBLEMA INVISÍVEL */}
      <Section>
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            O verdadeiro problema não é a droga. <span className="text-gradient-gold">É o silêncio que vem antes dela.</span>
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
          <Reveal direction="up" delay={100}>
            <p>
              Quando o assunto vira manchete na sua família, geralmente já é tarde. O início é <strong>invisível</strong> feito de pequenas mudanças que parecem "coisa de adolescente" e que, somadas, formam um padrão que ninguém te ensinou a enxergar.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              Mudança no grupo de amigos. Olheiras "do estudo". Apetite que some e volta. Dinheiro que falta. Cheiros estranhos. Humor em montanha-russa. Sono trocado. Notas caindo. E, principalmente: <strong className="text-accent">a distância emocional que cresce todos os dias</strong>.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>
              A maioria dos pais só reage quando algo acontece. <strong>Os pais que protegem agem antes</strong> não com vigilância, não com castigo, não com sermão. Mas com <em>informação certa</em> e <em>conversa estratégica</em>.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* SOLUÇÃO + PRODUTO */}
      <Section className="bg-deep-radial text-cream">
        <div className="text-center">
          <Reveal direction="up">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">A solução</span>
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl">
              Apresento o <span className="text-gradient-gold">Conexão Segura</span>
            </h2>
            <p className="mt-4 text-lg text-cream/80">O guia essencial para pais que querem proteger sem perder o filho.</p>
          </Reveal>
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <Reveal direction="left">
            <img src={ebookMockup} alt="Mockup do guia Conexão Segura" width={1024} height={1024} loading="lazy" className="mx-auto max-w-sm drop-shadow-2xl" />
          </Reveal>
          <div className="space-y-5">
            <Reveal direction="right">
              <p className="text-lg leading-relaxed text-cream/90">
                Um método completo, sensível e <strong className="text-gold">cientificamente embasado</strong> que combina:
              </p>
            </Reveal>
            <ul className="space-y-4">
              {[
                "Um mapa visual dos 27 sinais que pais experientes aprenderam a identificar, separados entre comportamentais, físicos e emocionais.",
                "O Método Diálogo Sem Barreiras: uma abordagem empática que substitui interrogatório por conexão real.",
                "Um roteiro de 41 perguntas estratégicas para abrir conversas que parecem impossíveis, sem que seu filho se feche.",
                "Protocolos prontos para os 6 cenários mais delicados (descobertas, recaídas, confronto, negação, escola, amigos).",
              ].map((t, i) => (
                <Reveal key={i} direction="right" delay={i * 100}>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-cream/90">{t}</span>
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

      {/* O QUE TEM DENTRO */}
      <Section>
        <Reveal direction="up">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">O que você vai encontrar dentro do guia</h2>
            <p className="mt-4 text-muted-foreground text-lg">Mais de 120 páginas de conteúdo prático, direto e aplicável já hoje.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { n: "01", t: "O Mapa dos 27 Sinais", d: "Tudo que pais ignoram por achar que é 'fase', e que pode salvar a história do seu filho se identificado a tempo." },
            { n: "02", t: "Método Diálogo Sem Barreiras", d: "A técnica de comunicação que desarma a defesa do adolescente e abre canal real para a verdade aparecer." },
            { n: "03", t: "Roteiro de 41 Perguntas Estratégicas", d: "Perguntas testadas que não soam como interrogatório, feitas para revelar sem acusar." },
            { n: "04", t: "Checklist de Comportamento Semanal", d: "Uma ferramenta simples para você acompanhar mudanças sem virar 'detetive' dentro de casa." },
            { n: "05", t: "Protocolos de Crise", d: "O que dizer (e o que NUNCA dizer) nos 6 cenários mais delicados que um pai pode enfrentar." },
            { n: "06", t: "Plano de Reconexão em 21 Dias", d: "Um passo a passo diário para reconstruir a ponte emocional com seu filho, mesmo que ela pareça quebrada." },
          ].map(({ n, t, d }, index) => (
            <Reveal key={n} direction="up" delay={index * 100}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg">
                <span className="font-serif text-3xl font-bold text-gradient-gold">{n}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* POR QUE O ROTEIRO FUNCIONA */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            Por que o roteiro de perguntas <span className="text-gradient-gold">funciona quando tudo o mais já falhou</span>
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
          <Reveal direction="up" delay={100}>
            <p>
              O cérebro adolescente foi feito para resistir à autoridade. Quando você pergunta de forma direta — <em>"você está usando alguma coisa?"</em> — o cérebro dele aciona a defesa antes mesmo da consciência. Resultado: porta fechada, fone no ouvido, conversa morta.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p>
              O roteiro do <strong>Conexão Segura</strong> foi construído com base em princípios de <strong>entrevista motivacional</strong>, <strong>escuta ativa</strong> e <strong>comunicação não-violenta</strong> — adaptados para a realidade de uma família real, na sua mesa de jantar, no carro, no sofá.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>
              Você não vai parecer terapeuta. Você não vai parecer policial. Você vai parecer o que sempre foi: <strong className="text-accent">o porto seguro dele</strong>. E é exatamente aí que a verdade começa a aparecer.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">A transformação que te espera</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal direction="left" delay={100}>
            <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-7">
              <h3 className="font-serif text-xl font-semibold text-destructive">Hoje</h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                {["Insônia e angústia constante","Conversas que viram brigas","Sensação de estar perdendo seu filho","Não saber se é paranoia ou realidade","Medo paralisante de fazer a coisa errada"].map(x =>
                  <li key={x} className="flex gap-2"><span className="text-destructive">✕</span> {x}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-7">
              <h3 className="font-serif text-xl font-semibold text-accent">Em 7 dias</h3>
              <ul className="mt-4 space-y-3 text-foreground/90">
                {["Clareza para enxergar o que antes era invisível","Conversas verdadeiras com seu adolescente","Confiança para agir com firmeza e amor","Plano de ação concreto para qualquer cenário","A paz de saber que você está fazendo o certo"].map(x =>
                  <li key={x} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" /> {x}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* AUTORIDADE */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="mx-auto h-32 w-32 rounded-full bg-deep flex items-center justify-center">
              <Award className="h-14 w-14 text-gold" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Quem está por trás</span>
              <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">Construído com quem entende do tema</h2>
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                Este guia foi desenvolvido com base em mais de uma década de experiência prática em <strong>orientação familiar</strong>, <strong>prevenção ao uso de substâncias</strong> e <strong>comunicação com adolescentes</strong>, em parceria com psicólogos, terapeutas familiares e — principalmente — pais que viveram, na pele, cada um dos cenários que você vai aprender a enfrentar.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* DEPOIMENTOS */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">Pais que já trilharam esse caminho</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Ana Lúcia, 44", c: "mãe do Pedro, 15", t: "Eu estava perdida. Meu filho tinha se fechado completamente, e qualquer pergunta minha virava agressão. Em duas semanas usando o roteiro, tivemos a primeira conversa de verdade em quase um ano. Eu chorei. Ele também." },
            { n: "Carlos Eduardo, 51", c: "pai da Sofia, 16", t: "Eu vivia com medo de tocar no assunto e estragar tudo. O guia me deu o que eu mais precisava: palavras certas para dizer e a calma para escutar. Hoje minha filha vem ME procurar." },
            { n: "Patrícia, 38", c: "mãe gêmeos, 14", t: "Achei que estava paranoica. Não estava. Identifiquei sinais que eu vinha ignorando há meses. O melhor: agi sem brigar, sem invadir, sem destruir nossa relação. Esse guia salvou minha família." },
          ].map((d, index) => (
            <Reveal key={d.n} direction="up" delay={index * 150}>
              <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <p className="mt-4 flex-1 text-foreground/90 leading-relaxed italic">"{d.t}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{d.n}</p>
                  <p className="text-sm text-muted-foreground">{d.c}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OFERTA */}
      <section id="oferta" className="bg-deep-radial px-5 py-20 text-cream md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">Oferta especial de lançamento</span>
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl">
              Tudo isso por <span className="text-gradient-gold">menos do que um jantar</span>
            </h2>
            <p className="mt-4 text-cream/80 text-lg">A oferta abaixo expira nas próximas horas:</p>
          </Reveal>
          <div className="mt-8"><Countdown /></div>
          <Reveal direction="up" delay={100}>
            <div className="mt-10 rounded-3xl border border-gold/30 bg-card/5 p-8 text-left backdrop-blur md:p-10">
              <h3 className="font-serif text-2xl font-bold text-gold md:text-3xl">Conexão Segura — Pacote Completo</h3>
              <ul className="mt-6 space-y-3">
                {[
                  ["Guia Completo em PDF", "R$ 197"],
                  ["Roteiro Estratégico de 40 Perguntas", "R$ 87"],
                  ["Checklist dos 27 Sinais", "R$ 47"],
                  ["BÔNUS #1 — Webinar 'Como Manter a Calma'", "R$ 49"],
                  ["BÔNUS #2 — Mini-guia 'Resiliência do Adolescente'", "R$ 39"],
                ].map(([t,v]) => (
                  <li key={t} className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3">
                    <span className="flex items-center gap-2 text-cream/90"><CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />{t}</span>
                    <span className="text-cream/60 line-through text-sm">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <p className="text-cream/70">Valor real: <span className="line-through">R$ 419</span></p>
                <p className="mt-2 text-sm text-cream/80">Hoje, por apenas:</p>
                <p className="mt-1 font-serif text-6xl font-bold text-gradient-gold md:text-7xl">R$ 47</p>
                <p className="mt-1 text-sm text-cream/70">à vista — ou 12x de R$ 4,67</p>
                <div className="mt-8"><CTAButton large>Garantir meu acesso agora</CTAButton></div>
                <p className="mt-4 text-xs text-cream/60 flex items-center justify-center gap-2"><Lock className="h-3 w-3" /> Pagamento seguro · Acesso imediato por e-mail</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GARANTIA */}
      <Section>
        <Reveal direction="up">
          <div className="rounded-3xl border-2 border-accent/40 bg-accent/5 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
              <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Shield className="h-14 w-14" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold md:text-4xl">Garantia incondicional de 7 dias</h2>
                <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                  Leia. Aplique. Sinta a diferença. Se em 7 dias você achar que o <strong>Conexão Segura</strong> não te ajudou — por qualquer motivo — basta enviar um e-mail e devolvemos <strong>100% do seu investimento</strong>. Sem perguntas. Sem burocracia. <em>O risco é todo nosso, porque o seu filho é prioridade demais para você arriscar sozinho(a).</em>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* QUEBRA DE OBJEÇÕES */}
      <Section className="bg-secondary/40">
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">"Mas e se…?"</h2>
          <p className="text-center mt-3 text-muted-foreground">Vamos conversar sobre as dúvidas que provavelmente estão passando na sua cabeça agora.</p>
        </Reveal>
        <div className="mt-10 space-y-5">
          {[
            ['"Meu filho nunca faria isso."',"É exatamente o que pensa toda família, até o dia em que pensa diferente. Este guia não nasce da desconfiança — nasce do amor preventivo. Pais informados protegem antes de precisar reagir."],
            ['"Não quero invadir a privacidade dele."',"E você não vai. O método ensina a observar e dialogar — não a vigiar. É construir confiança, não muros."],
            ['"Tenho medo de estragar nossa relação."',"O que estraga relações é o silêncio acumulado e a abordagem errada. Aqui você aprende exatamente o oposto: o caminho que aproxima."],
            ['"Já tentei conversar e ele se fechou."',"Por isso o roteiro existe. Ele foi construído justamente para evitar o gatilho de defesa que faz adolescente fechar a porta."],
          ].map(([q,a], index) => (
            <Reveal key={q} direction="up" delay={index * 100}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-accent">{q}</h3>
                <p className="mt-2 text-foreground/85 leading-relaxed">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal direction="up">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">Perguntas frequentes</h2>
        </Reveal>
        <div className="mt-10">
          {[
            { q: "Como recebo o material após a compra?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o acesso ao guia em PDF, ao roteiro de perguntas, aos bônus e ao link da comunidade privada." },
            { q: "Funciona para qualquer idade de adolescente?", a: "Sim. O conteúdo foi pensado para pais de filhos entre 11 e 19 anos, com adaptações específicas por faixa etária." },
            { q: "Eu preciso de conhecimento prévio em psicologia?", a: "Nenhum. O guia foi escrito em linguagem clara, com exemplos reais e passo a passo. Qualquer pai ou mãe consegue aplicar." },
            { q: "Meu filho vai perceber que estou usando um método?", a: "Não. As perguntas e abordagens parecem conversas naturais — esse é justamente o segredo do método." },
            { q: "E se eu já desconfio de algo concreto?", a: "Existe um capítulo dedicado a esse cenário, com protocolos passo a passo do que dizer, fazer e evitar nos primeiros dias." },
            { q: "Posso pedir reembolso?", a: "Sim. Você tem 7 dias de garantia incondicional. Basta um e-mail e devolvemos 100% do valor." },
          ].map((f, index) => (
            <Reveal key={f.q} direction="up" delay={index * 80}>
              <FAQItem {...f} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FECHAMENTO EMOCIONAL */}
      <section className="bg-deep-radial px-5 py-20 text-cream md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <Heart className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-6 font-serif text-4xl font-bold md:text-6xl leading-tight">
              Daqui a um ano, você vai olhar para trás e <span className="text-gradient-gold">agradecer</span>.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed">
              Existem dois caminhos a partir desta página. No primeiro, você fecha esta aba, volta para o dia, e a preocupação continua roendo por dentro — só que agora com a culpa de não ter agido quando podia.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/85 leading-relaxed">
              No segundo, você toma uma decisão pequena e poderosa. Você se equipa. Você aprende. Você conversa. E na próxima vez que seu filho passar pela porta, ele vai sentir — sem precisar saber por quê — que <strong className="text-gold">tem alguém realmente vendo ele</strong>.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="mt-8 font-serif text-2xl text-gold italic">
              Seu filho não precisa de pais perfeitos. Precisa de pais presentes.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <div className="mt-10"><CTAButton large>Quero estar presente agora</CTAButton></div>
            <p className="mt-6 text-sm text-cream/60 flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" /> Compra segura · Garantia de 7 dias · Acesso imediato
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="bg-deep px-5 py-10 text-center text-xs text-cream/60">
        <p>© Conexão Segura. Todos os direitos reservados.</p>
        <p className="mt-2 max-w-2xl mx-auto">Este material tem caráter educativo e preventivo. Não substitui acompanhamento profissional especializado em casos de uso ou dependência de substâncias.</p>
      </footer>

    </main>
  );
}
