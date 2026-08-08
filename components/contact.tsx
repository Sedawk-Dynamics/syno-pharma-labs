"use client";

import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, SectionHeading } from "./reveal";
import { EnquiryForm } from "./enquiry-form";

const details = [
  {
    icon: MapPin,
    label: "Registered office",
    value: "2321 Gali No-35, Part-1, Sonia Vihar, New Delhi - 110094",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 76430 85315 | +91 99903 93883",
    href: "tel:+917643085315",
  },
  { icon: Mail, label: "Email", value: "info@synopharma.com", href: "mailto:info@synopharma.com" },
  { icon: Clock, label: "Working hours", value: "Monday – Saturday, 9:00 AM to 6:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's build better patient outcomes together"
          description="Reach out for product details, distribution partnerships or medical queries."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Card className="h-full border-border/70 shadow-soft">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <Building2 className="size-6" />
                </div>
                <CardTitle className="mt-3 text-xl">Syno Pharma Laboratories Pvt. Ltd.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-3">
                    <d.icon className="mt-0.5 size-5 shrink-0 text-teal" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-sm font-medium text-foreground hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.12}>
            <Card className="h-full border-border/70 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Send an enquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <EnquiryForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
