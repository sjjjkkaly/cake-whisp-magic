import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Clock, MapPin, CakeSlice, Sparkles, CalendarCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaButton, wa, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/wa";

import heroCake from "@/assets/hero-cake.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — Mitha Patisserie" },
      {
        name: "description",
        content:
          "Order custom cakes, chocolates and hampers over WhatsApp. Hours, delivery areas and answers to common questions.",
      },
      { property: "og:title", content: "Contact & Order — Mitha Patisserie" },
      {
        property: "og:description",
        content:
          "Order custom cakes, chocolates and hampers over WhatsApp. Hours, delivery areas and FAQs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    note: "Fastest — replies within an hour",
    href: wa("Hi Mitha, I have a question"),
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_EMAIL,
    note: "For bulk & corporate orders",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon–Sat, 9am–7pm",
    note: "Sunday: pre-orders only",
    href: wa("Hi! What are your timings this week?"),
  },
  {
    icon: MapPin,
    title: "Delivery",
    value: "Across Bengaluru",
    note: "Same-day for in-stock items",
    href: wa("Hi! Do you deliver to my area?"),
  },
];

const faqs = [
  {
    q: "How far in advance should I order a custom cake?",
    a: "Three days is ideal so we can plan flavours and design. In a pinch, message us — we can often manage 24–48 hours.",
  },
  {
    q: "Can you match a theme or a photo I send?",
    a: "Yes — send any reference photo on WhatsApp and we'll sketch a version that fits your size and budget.",
  },
  {
    q: "Do you deliver?",
    a: "We deliver across the city. Cakes travel in chilled, sturdy boxes; décor kits are set up on request.",
  },
  {
    q: "How do I pay?",
    a: "We confirm your order on WhatsApp and share a payment link. Full payment reserves your date.",
  },
];

const occasions = [
  {
    icon: CakeSlice,
    title: "Birthdays & weddings",
    body: "Tell us the date, guests and theme — we handle flavour, size and delivery.",
  },
  {
    icon: Sparkles,
    title: "Corporate & bulk",
    body: "Hampers, branded boxes and event dessert tables. Email us for a quote.",
  },
  {
    icon: CalendarCheck,
    title: "Standing orders",
    body: "Weekly brownies for the office or monthly celebration boxes — just ask.",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="drift absolute -top-24 -left-24 size-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="drift-2 absolute top-1/3 -right-32 size-[460px] rounded-full bg-accent blur-3xl" />
        <div className="drift absolute bottom-0 left-1/3 size-[380px] rounded-full bg-secondary blur-3xl" />
      </div>

      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rise-in">
              <span className="inline-flex items-center gap-2 rounded-full bg-card/60 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase ring-1 ring-border backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" /> We reply fast
              </span>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-tight">
                Let's talk about your <span className="text-primary italic">order</span>.
              </h1>
              <p className="mt-4 max-w-[50ch] text-pretty text-muted-foreground">
                Every order starts with a message. Tell us what you're
                celebrating and we'll take it from there — no forms, no carts,
                no accounts.
              </p>
              <div className="mt-6">
                <WaButton
                  message="Hi Mitha, I'd love to place an order"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
                >
                  Message us on WhatsApp
                </WaButton>
              </div>
            </div>
            <div className="rise-in-2">
              <div className="rounded-[1.6rem] bg-card/50 p-3 ring-1 ring-border backdrop-blur-xl">
                <img
                  src={heroCake}
                  alt="Pink frosted celebration cake"
                  width={1024}
                  height={1280}
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover ring-1 ring-border lg:aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.4rem] bg-card/60 p-5 ring-1 ring-border backdrop-blur-xl transition-transform hover:-translate-y-1"
              >
                <c.icon className="size-5 text-primary" />
                <p className="mt-3 text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  {c.title}
                </p>
                <p className="mt-1 font-medium">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <div className="rounded-[1.8rem] bg-card/50 p-6 ring-1 ring-border backdrop-blur-xl sm:p-10">
            <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
              Whatever you're celebrating
            </h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {occasions.map((o) => (
                <div key={o.title} className="rounded-2xl bg-card/70 p-5 ring-1 ring-border">
                  <o.icon className="size-5 text-primary" />
                  <p className="mt-3 font-display text-lg">{o.title}</p>
                  <p className="mt-1 text-sm text-pretty text-muted-foreground">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 py-6 pb-10 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-[1.4rem] bg-card/60 p-6 ring-1 ring-border backdrop-blur-xl">
                <p className="font-display text-lg leading-snug">{f.q}</p>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
