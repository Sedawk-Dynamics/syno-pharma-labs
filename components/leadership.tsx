"use client";

import { Quote, HeartHandshake, UserRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./reveal";

const directors = [
  {
    name: "Mr. Satish Kumar Thakur",
    role: "Managing Director",
    note: "Two decades of building ethical distribution and doctor-first relationships.",
  },
  {
    name: "Mrs. Kumkum Mishra",
    role: "Managing Director",
    note: "Champions quality systems, compliance and patient-centred product design.",
  },
];

export function Leadership() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            Leadership
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            A message from our Managing Directors
          </h2>
          <figure className="mt-6 rounded-3xl border border-border bg-secondary/60 p-6 shadow-soft sm:p-8">
            <Quote className="size-8 text-teal" />
            <blockquote className="mt-4 text-lg font-medium leading-relaxed text-foreground">
              &ldquo;Healthcare is never a solo effort. Togetherness — between doctors, chemists,
              patients and our team — is what turns a good medicine into a better outcome. We put
              patients first, ethics above sales, and evidence above claims.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <HeartHandshake className="size-4 text-primary" />
              Satish Kumar Thakur &amp; Kumkum Mishra, Managing Directors
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {directors.map((d, i) => (
            <Reveal key={d.name} delay={0.12 + i * 0.12}>
              <Card className="card-lift border-border/70 shadow-soft">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                    <UserRound className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                    <p className="text-sm font-semibold text-primary">{d.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.note}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
