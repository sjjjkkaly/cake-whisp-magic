import { WaButton, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/wa";

export function SiteFooter() {
  return (
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
                {WHATSAPP_DISPLAY} · {CONTACT_EMAIL}
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
  );
}
