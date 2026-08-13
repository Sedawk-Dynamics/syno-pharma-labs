"use client";

import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/syno-logo.png";

const logoSrc = typeof logoAsset === "string" ? logoAsset : logoAsset.src;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Core Values", href: "#values" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-background px-3 py-2">
              <img src={logoSrc} alt="Syno Pharma logo" width={176} height={54} className="h-9 w-auto" loading="lazy" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-deep-foreground/70">
              SYNO PHARMA LABORATORIES PRIVATE LIMITED — delivering ethical, evidence-based
              healthcare solutions across gastroenterology, hepatology and nutritional care.
            </p>
            {/* <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-deep-foreground/60">
              GSTIN: 10ABRCS7172C1ZD
            </p> */}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-deep-foreground/70 transition-colors hover:text-deep-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Reach us</h3>
            <ul className="mt-4 space-y-3 text-sm text-deep-foreground/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                2321 Gali No-35, Part-1, Sonia Vihar, New Delhi - 110094
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href="tel:+917643085315" className="hover:text-deep-foreground">
                  +91 76430 85315
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href="mailto:info@synopharma.in" className="hover:text-deep-foreground">
                  info@synopharma.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-deep-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-deep-foreground/60">
            © {new Date().getFullYear()} Syno Pharma Laboratories Private Limited. All rights
            reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="text-deep-foreground hover:bg-deep-foreground/10 hover:text-deep-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp /> Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
