import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaButton } from "@/lib/wa";

import catCakes from "@/assets/cat-cakes.jpg";
import catChocolates from "@/assets/cat-chocolates.jpg";
import catHampers from "@/assets/cat-hampers.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import itemRedVelvet from "@/assets/item-redvelvet.jpg";
import itemBrownies from "@/assets/item-brownies.jpg";
import itemCustom from "@/assets/item-custom.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mitha Patisserie" },
      {
        name: "description",
        content:
          "Custom cakes, Belgian chocolates, gift hampers, keepsakes and party décor — prices and flavours, all orderable on WhatsApp.",
      },
      { property: "og:title", content: "Menu — Mitha Patisserie" },
      {
        property: "og:description",
        content:
          "Custom cakes, Belgian chocolates, gift hampers, keepsakes and party décor — order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Custom Cakes",
    note: "Baked to order · 3 days notice",
    img: catCakes,
    msg: "Hi! I'd like to order a custom cake",
    items: [
      { name: "Red Velvet Dream", desc: "Cream cheese · 6 inch · serves 8", price: "₹1,450" },
      { name: "Signature Rose Cake", desc: "Custom theme · made to order", price: "from ₹1,900" },
      { name: "Chocolate Truffle Cake", desc: "Belgian dark · 6 inch", price: "₹1,250" },
      { name: "Fresh Fruit Gateau", desc: "Seasonal fruit · light sponge", price: "₹1,350" },
      { name: "Cupcake Dozen", desc: "Mixed flavours · box of 12", price: "₹720" },
    ],
  },
  {
    title: "Chocolates",
    note: "Small-batch · couverture",
    img: catChocolates,
    msg: "Hi! I'd like to order chocolates",
    items: [
      { name: "Belgian Truffle Box", desc: "12 pieces · dark & milk", price: "₹899" },
      { name: "Fudge Brownie Box", desc: "8 pieces · ganache drizzle", price: "₹549" },
      { name: "Chocolate Bark Trio", desc: "Almond, cranberry, sea salt", price: "₹499" },
      { name: "Assorted Bonbons", desc: "9 pieces · filled centres", price: "₹650" },
    ],
  },
  {
    title: "Gift Hampers",
    note: "Ready to send · free wrapping",
    img: catHampers,
    msg: "Hi! I'd like to order a gift hamper",
    items: [
      { name: "The Cozy Hamper", desc: "Candle, cookies & mini cake", price: "₹1,250" },
      { name: "Celebration Hamper", desc: "Cake jar, truffles & bubbly note", price: "₹1,899" },
      { name: "Tea-Time Box", desc: "Biscuits, brownies & tea blend", price: "₹999" },
    ],
  },
  {
    title: "Gifts",
    note: "Personalised · add a message",
    img: catGifts,
    msg: "Hi! I'd like to order a personalised gift",
    items: [
      { name: "Personalised Keepsake", desc: "Custom card & ribbon", price: "₹650" },
      { name: "Cake Jar Duo", desc: "Two flavours · travel-safe", price: "₹450" },
      { name: "Photo Cake Topper", desc: "Edible print · any cake size", price: "₹350" },
    ],
  },
  {
    title: "Decorations",
    note: "Party-ready · city delivery",
    img: catDecor,
    msg: "Hi! I'd like to order party decorations",
    items: [
      { name: "Party Décor Kit", desc: "Balloons, bunting & candles", price: "₹1,100" },
      { name: "Balloon Bouquet", desc: "10 balloons · your colours", price: "₹750" },
      { name: "Sparkler & Candle Set", desc: "Cake-side finishing touch", price: "₹250" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="drift absolute -top-24 -left-24 size-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="drift-2 absolute top-1/3 -right-32 size-[460px] rounded-full bg-accent blur-3xl" />
        <div className="drift absolute bottom-0 left-1/3 size-[380px] rounded-full bg-secondary blur-3xl" />
      </div>

      <SiteHeader />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-6 sm:px-8">
          <span className="rise-in inline-flex items-center gap-2 rounded-full bg-card/60 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase ring-1 ring-border backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" /> The full menu
          </span>
          <h1 className="rise-in mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-tight">
            Everything we make, <span className="text-primary italic">priced</span>.
          </h1>
          <p className="rise-in-2 mt-4 max-w-[52ch] text-pretty text-muted-foreground">
            Tap any item and it opens WhatsApp with the name already typed in.
            Prices are starting points — custom themes, sizes and flavours are
            quoted on chat.
          </p>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.title} className="relative">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <div className="overflow-hidden rounded-[1.8rem] bg-card/50 ring-1 ring-border backdrop-blur-xl">
              <div className="flex flex-col gap-0 md:flex-row">
                <div className="relative md:w-72 md:shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-40 w-full object-cover md:h-full md:min-h-72"
                  />
                </div>
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                      {s.title}
                    </h2>
                    <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                      {s.note}
                    </span>
                  </div>
                  <div className="mt-5 divide-y divide-border/60">
                    {s.items.map((item) => (
                      <a
                        key={item.name}
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'd like to order the ${item.name}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-baseline justify-between gap-3 py-3"
                      >
                        <span>
                          <span className="font-medium transition-colors group-hover:text-primary">
                            {item.name}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {item.desc}
                          </span>
                        </span>
                        <span className="mx-2 hidden flex-1 border-b border-dotted border-border sm:block" />
                        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                          {item.price}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="rounded-[1.8rem] bg-card/60 p-8 text-center ring-1 ring-border backdrop-blur-xl">
            <p className="font-display text-2xl tracking-tight sm:text-3xl">
              Don't see exactly what you want?
            </p>
            <p className="mx-auto mt-2 max-w-[44ch] text-sm text-muted-foreground">
              We love a challenge. Describe your idea on WhatsApp and we'll
              sketch it out together.
            </p>
            <WaButton
              message="Hi Mitha! I have a custom order idea"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Ask on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
