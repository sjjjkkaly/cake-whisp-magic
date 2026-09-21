import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_DISPLAY = "+91 98765 43210";
export const CONTACT_EMAIL = "hello@mithapatisserie.in";

export const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function WaButton({
  message,
  children,
  className = "",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={wa(message)} target="_blank" rel="noreferrer" className={className}>
      <MessageCircle className="size-4 shrink-0" />
      {children}
    </a>
  );
}
