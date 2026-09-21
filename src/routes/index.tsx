import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import catCakes from "@/assets/cat-cakes.jpg";
import catChocolates from "@/assets/cat-chocolates.jpg";
import catHampers from "@/assets/cat-hampers.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import itemRedVelvet from "@/assets/item-redvelvet.jpg";
import itemBrownies from "@/assets/item-brownies.jpg";
import itemCustom from "@/assets/item-custom.jpg";

const WHATSAPP_NUMBER = "919876543210";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const categories = [
  {
    name: "Custom Cakes",
    desc: "Birthdays, weddings, themes",
    img: catCakes,
    msg: "Hi! I'm interested in custom cakes",
  },
  {
    name: "Chocolates",
    desc: "Truffles, boxes, bars",
    img: catChocolates,
    msg: "Hi! I'm interested in chocolates",
  },
  {
    name: "Gift Hampers",
    desc: "Curated boxes, ready to send",
    img: catHampers,
    msg: "Hi! I'm interested in gift hampers",
  },
  {
    name: "Gifts",
    desc: "Personalised keepsakes",
    img: catGifts,
    msg: "Hi! I'm interested in gifts",
  },
  {
    name: "Decorations",
    desc: "Balloons, bunting, candles",
    img: catDecor,
    msg: "Hi! I'm interested in party decorations",
  },
];

const products = [
  {
    name: "Red Velvet Dream",
    desc: "Cream cheese · 6 inch · serves 8",
    price: "₹1,450",
    img: itemRedVelvet,
  },
  {
    name: "Belgian Truffle Box",
    desc: "12 pieces · dark & milk",
    price: "₹899",
    img: catChocolates,
  },
  {
    name: "The Cozy Hamper",
    desc: "Candle, cookies & mini cake",
    price: "₹1,250",
    img: catHampers,
  },
  {
    name: "Personalised Keepsake",
    desc: "Custom card & ribbon",
    price: "₹650",
    img: catGifts,
  },
  {
    name: "Party Décor Kit",
    desc: "Balloons, bunting & candles",
    price: "₹1,100",
    img: catDecor,
  },
  {
    name: "Fudge Brownie Box",
    desc: "8 pieces · ganache drizzle",
    price: "₹549",
    img: itemBrownies,
  },
  {
    name: "Signature Rose Cake",
    desc: "Custom theme · made to order",
    price: "from ₹1,900",
    img: itemCustom,
  },
];

const testimonials = [
  {
    quote:
      "The red velvet was the star of my daughter's birthday. Everyone asked where it was from.",
    name: "Ananya, Indiranagar",
  },
  {
    quote:
      "Ordered a hamper for my mum and it arrived beautifully packed. The truffles were divine.",
    name: "Rohan, Whitefield",
  },
  {
    quote:
      "The décor kit made our anniversary feel like a film. Ordering over WhatsApp was so easy.",
    name: "Priya & Dev, Koramangala",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mitha Patisserie — Custom Cakes, Chocolates & Hampers" },
      {
        name: "description",
        content:
          "Handmade custom cakes, chocolates, gift hampers, gifts and party decorations. Order in seconds on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Mitha Patisserie — Custom Cakes, Chocolates & Hampers",
      },
      {
        property: "og:description",
        content:
          "Handmade custom cakes, chocolates, gift hampers, gifts and party decorations. Order in seconds on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaButton({
  message,
  children,
  className = "",
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <MessageCircle className="size-4 shrink-0" />
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* ambient light */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="drift absolute -top-24 -left-24 size-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="drift-2 absolute top-1/3 -right-32 size-[460px] rounded-full bg-accent blur-3xl" />
        <div className="drift absolute bottom-0 left-1/3 size-[380px] rounded-full bg-secondary blur-3xl" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-card/60 px-4 py-3 ring-1 ring-border backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                M
              </span>
              <span className="font-display text-lg tracking-tight">
                Mitha{" "}
                <span className="text-muted-foreground">Patisserie</span>
              </span>
            </div>
            <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
              <a href="#menu" className="transition-colors hover:text-foreground">
                Menu
              </a>
              <a
                href="#gallery"
                className="transition-colors hover:text-foreground"
              >
                Gallery
              </a>
              <a href="#how" className="transition-colors hover:text-foreground">
                How it works
              </a>
            </nav>
            <WaButton
              message="Hi Mitha, I'd love to place an order"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Order on WhatsApp
            </WaButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rise-in">
              <span className="inline-flex items-center gap-2 rounded-full bg-card/60 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase ring-1 ring-border backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" /> Handmade
                in small batches
              </span>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] tracking-tight text-balance">
                Cakes, chocolates &amp; gifts that taste like a{" "}
                <span className="text-primary italic">celebration</span>.
              </h1>
              <p className="mt-5 max-w-[46ch] text-base text-pretty text-muted-foreground sm:text-lg">
                Custom cakes, truffles, hampers and party décor — baked fresh
                and delivered across the city. Pick something, message us on
                WhatsApp, and we handle the rest.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <WaButton
                  message="Hi Mitha, I'd love to place an order"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
                >
                  Order on WhatsApp
                </WaButton>
                <a
                  href="#menu"
                  className="rounded-full bg-card/60 px-6 py-3 text-sm font-medium text-foreground ring-1 ring-border backdrop-blur transition-colors hover:bg-card"
                >
                  Browse the menu
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span>Same-week delivery</span>
                <span>·</span>
                <span>Custom flavours</span>
                <span>·</span>
                <span>500+ happy orders</span>
              </div>
            </div>

            <div className="rise-in-2 relative">
              <div className="rounded-[1.6rem] bg-card/50 p-3 ring-1 ring-border backdrop-blur-xl">
                <img
                  src={heroCake}
                  alt="Pink frosted celebration cake under a glass dome"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-[1.2rem] object-cover ring-1 ring-border"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-card/70 px-4 py-3 ring-1 ring-border backdrop-blur-xl">
                <p className="font-display text-2xl leading-none">4.9</p>
                <p className="text-xs text-muted-foreground">
                  from 320 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="menu" className="relative scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                The menu
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Five things we make with a lot of love.
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((c, i) => (
              <a
                key={c.name}
                href={wa(c.msg)}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-2xl bg-card/60 p-4 ring-1 ring-border backdrop-blur-xl transition-transform hover:-translate-y-1 ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover ring-1 ring-border transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <p className="mt-3 font-display text-lg">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Fresh from the counter
            </h2>
            <span className="text-sm text-muted-foreground">
              Tap any item to order
            </span>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="group rounded-[1.4rem] bg-card/60 p-3 ring-1 ring-border backdrop-blur-xl transition-transform hover:-translate-y-1"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover ring-1 ring-border transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="flex items-start justify-between gap-3 px-1 pt-3">
                  <div>
                    <p className="font-display text-lg">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                    {p.price}
                  </span>
                </div>
                <WaButton
                  message={`Hi! I'd like to order the ${p.name}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-primary/40 transition-colors hover:opacity-90"
                >
                  Order on WhatsApp
                </WaButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section id="how" className="relative scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="rounded-[1.8rem] bg-card/50 p-6 ring-1 ring-border backdrop-blur-xl sm:p-10">
            <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
              Ordering is as simple as a text
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  n: "1",
                  title: "Pick something",
                  body: "Browse the menu and choose a cake, chocolate, hamper or décor.",
                },
                {
                  n: "2",
                  title: "Message us",
                  body: "Tap “Order on WhatsApp” and tell us your date, flavour and size.",
                },
                {
                  n: "3",
                  title: "We bake & deliver",
                  body: "We confirm, bake fresh and deliver to your door. No apps, no carts.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl bg-card/70 p-5 ring-1 ring-border"
                >
                  <span className="font-display text-3xl text-primary">
                    {s.n}
                  </span>
                  <p className="mt-2 font-display text-lg">{s.title}</p>
                  <p className="mt-1 text-sm text-pretty text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-[1.4rem] bg-card/60 p-6 ring-1 ring-border backdrop-blur-xl"
              >
                <p className="font-display text-lg leading-snug text-pretty">
                  “{t.quote}”
                </p>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <div className="rounded-[1.8rem] bg-foreground p-8 text-background ring-1 ring-border sm:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
                  Ready to make something sweet?
                </p>
                <p className="mt-3 max-w-[40ch] text-pretty text-background/70">
                  Message us on WhatsApp and we'll help you pick the perfect
                  treat for any occasion.
                </p>
              </div>
              <div className="md:text-right">
                <WaButton
                  message="Hi Mitha, I'd love to place an order"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Chat on WhatsApp
                </WaButton>
                <p className="mt-4 text-sm text-background/70">
                  +91 98765 43210 · hello@mithapatisserie.in
                </p>
                <p className="mt-1 text-sm text-background/50">
                  Bengaluru · Mon–Sat, 9am–7pm
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 border-t border-background/15 pt-5 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 Mitha Patisserie · Handmade with care</span>
              <span>Cakes · Chocolates · Hampers · Gifts · Décor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
