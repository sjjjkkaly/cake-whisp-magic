import { Link } from "@tanstack/react-router";
import { WaButton } from "@/lib/wa";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-card/60 px-4 py-3 ring-1 ring-border backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              M
            </span>
            <span className="font-display text-lg tracking-tight">
              Mitha <span className="text-muted-foreground">Patisserie</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link
              to="/menu"
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Contact
            </Link>
          </nav>
          <WaButton
            message="Hi Mitha, I'd love to place an order"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
          >
            Order on WhatsApp
          </WaButton>
        </div>
        {/* mobile nav */}
        <nav className="mt-2 flex items-center justify-center gap-6 rounded-full bg-card/60 py-2 text-xs text-muted-foreground ring-1 ring-border backdrop-blur-xl md:hidden">
          <Link to="/" activeProps={{ className: "text-foreground font-semibold" }}>
            Home
          </Link>
          <Link to="/menu" activeProps={{ className: "text-foreground font-semibold" }}>
            Menu
          </Link>
          <Link to="/gallery" activeProps={{ className: "text-foreground font-semibold" }}>
            Gallery
          </Link>
          <Link to="/contact" activeProps={{ className: "text-foreground font-semibold" }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
