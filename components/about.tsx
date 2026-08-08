"use client";

import { Compass, HeartHandshake, ShieldCheck, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, SectionHeading } from "./reveal";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To advance healthcare through uncompromising quality, ethical practice and genuine patient care in everything we formulate and deliver.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    text: "To be the most trusted pharmaceutical partner for healthcare professionals across India and beyond.",
  },
  {
    icon: ShieldCheck,
    title: "Our Values",
    text: "Built on Integrity, Innovation and Impact — the three commitments that guide every decision we make.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Transparent dealings, ethical marketing and honest science." },
  { icon: Lightbulb, title: "Innovation", text: "Evidence-based formulations designed around real clinical needs." },
  { icon: TrendingUp, title: "Impact", text: "Measured by better patient outcomes, not just numbers." },
  { icon: HeartHandshake, title: "Togetherness", text: "Partnering with doctors, chemists and patients as one team." },
];

export function About() {
  return (
    <section id="about" className="pt-16 pb-20 lg:pt-16 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Driven by Integrity, Innovation & Impact"
          description="Syno Pharma Laboratories Private Limited is a New Delhi based pharmaceutical company focused on gastroenterology, hepatology and nutritional care."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <Card className="card-lift h-full border-border/70 shadow-soft">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                    <c.icon className="size-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{c.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{c.text}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>

        <div id="values" className="mt-20 scroll-mt-24">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every prescription"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <Card className="card-lift h-full border-border/70 bg-secondary/60">
                  <CardContent className="p-6">
                    <v.icon className="size-6 text-teal" />
                    <h3 className="mt-3 text-base font-bold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
