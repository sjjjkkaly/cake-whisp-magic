import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaButton } from "@/lib/wa";

import heroCake from "@/assets/hero-cake.jpg";
import catCakes from "@/assets/cat-cakes.jpg";
import catChocolates from "@/assets/cat-chocolates.jpg";
import catHampers from "@/assets/cat-hampers.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import itemRedVelvet from "@/assets/item-redvelvet.jpg";
import itemBrownies from "@/assets/item-brownies.jpg";
import itemCustom from "@/assets/item-custom.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mitha Patisserie" },
      {
        name: "description",
        content:
          "Recent bakes, hampers and party setups from the Mitha Patisserie kitchen. Tap any photo to order something similar on WhatsApp.",
      },
      { property: "og:title", content: "Gallery — Mitha Patisserie" },
      {
        property: "og:description",
        content:
          "Recent bakes, hampers and party setups from the Mitha Patisserie kitchen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const shots = [
  { img: heroCake, label: "Pink celebration cake", tag: "Custom cake", msg: "Hi! I loved the pink celebration cake in your gallery" },
  { img: itemRedVelvet, label: "Red velvet, sliced", tag: "Cake", msg: "Hi! I'd like to order the red velvet cake from your gallery" },
  { img: catChocolates, label: "Hand-dipped truffles", tag: "Chocolates", msg: "Hi! I'd like to order the truffles from your gallery" },
  { img: catHampers, label: "The Cozy Hamper", tag: "Hamper", msg: "Hi! I'd like to order the hamper from your gallery" },
  { img: itemCustom, label: "Signature rose design", tag: "Custom cake", msg: "Hi! I'd like a cake like the signature rose in your gallery" },
  { img: catGifts, label: "Wrapped keepsake", tag: "Gift", msg: "Hi! I'd like to order the keepsake gift from your gallery" },
  { img: itemBrownies, label: "Fudge brownies", tag: "Chocolates", msg: "Hi! I'd like to order the fudge brownies from your gallery" },
  { img: catDecor, label: "Birthday décor setup", tag: "Décor", msg: "Hi! I'd like to book the party décor from your gallery" },
  { img: catCakes, label: "Two-tier floral cake", tag: "Custom cake", msg: "Hi! I'd like a cake like the two-tier floral in your gallery" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="drift absolute -top-24 -left-24 size-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="drift-2 absolute top-1/3 -right-32 size-[460px] rounded-full bg-accent blur-3xl" />
        <div className="drift absolute bottom-0 left-1/3 size-[380px] rounded-full bg-secondary blur-3xl" />
      </div>

      <SiteHeader />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:px-8">
          <span className="rise-in inline-flex items-center gap-2 rounded-full bg-card/60 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase ring-1 ring-border backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" /> From our kitchen
          </span>
          <h1 className="rise-in mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-tight">
            Fresh from the <span className="text-primary italic">counter</span>.
          </h1>
          <p className="rise-in-2 mt-4 max-w-[52ch] text-pretty text-muted-foreground">
            A peek at what left the kitchen this week. See something you love?
            Tap it — WhatsApp opens with your pick already written.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {shots.map((s, i) => (
              <a
                key={s.label}
                href={`https://wa.me/919876543210?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-[1.4rem] ring-1 ring-border transition-transform hover:-translate-y-1 ${i % 5 === 0 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-foreground/70 to-transparent p-4 pt-10">
                  <div>
                    <p className="text-sm font-medium text-background">{s.label}</p>
                    <p className="text-xs text-background/70">{s.tag}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    Order this
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <WaButton
              message="Hi Mitha! I saw your gallery and want to order something"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Start an order
            </WaButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
