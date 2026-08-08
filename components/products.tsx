"use client";

import { motion } from "motion/react";
import { Pill, FlaskConical, Droplets, Syringe, Package, Tablets, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "./reveal";

type Product = { name: string; form: string; icon: typeof Pill };

const categories: { id: string; label: string; blurb: string; items: Product[] }[] = [
  {
    id: "gastro",
    label: "Gastroenterology",
    blurb: "Acid control, motility and H. pylori management for everyday GI practice.",
    items: [
      { name: "Pancide 40 mg Tab", form: "Tablet", icon: Tablets },
      { name: "Pincode DSR Cap", form: "Capsule", icon: Pill },
      { name: "Pancide L Cap", form: "Capsule", icon: Pill },
      { name: "Pancide IT Cap", form: "Capsule", icon: Pill },
      { name: "Pancide HP Kit", form: "Combi kit", icon: Package },
      { name: "Pancide IV", form: "Injection", icon: Syringe },
      { name: "Anoraft Suspension", form: "Suspension", icon: Droplets },
    ],
  },
  {
    id: "hepato",
    label: "Hepatology & Special Care",
    blurb: "Liver support and targeted antimicrobial therapy for specialist care.",
    items: [
      { name: "Urodax 300 Tab", form: "Tablet", icon: Tablets },
      { name: "Urodx 150 mg Tab", form: "Tablet", icon: Tablets },
      { name: "Rifanac 200", form: "Tablet", icon: FlaskConical },
      { name: "Rifanac 400", form: "Tablet", icon: FlaskConical },
      { name: "Rifanac 550", form: "Tablet", icon: FlaskConical },
    ],
  },
  {
    id: "supplements",
    label: "Supplements",
    blurb: "Nutritional support formulations for all age groups.",
    items: [
      { name: "Folovit Tab", form: "Tablet", icon: Leaf },
      { name: "Folovit Syp", form: "Syrup", icon: Droplets },
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Our Pharmaceutical Products"
          description="A focused, prescription-grade portfolio across gastroenterology, hepatology and nutrition."
        />

        <Reveal className="mt-12" delay={0.1}>
          <Tabs defaultValue="gastro" className="w-full">
            <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-1 bg-background p-1.5 shadow-soft">
              {categories.map((c) => (
                <TabsTrigger key={c.id} value={c.id} className="rounded-lg px-4 py-2 text-sm">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-8">
                <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
                  {c.blurb}
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {c.items.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                      whileHover={{ y: -6 }}
                    >
                      <Card className="h-full border-border/70 bg-card shadow-soft transition-shadow hover:shadow-lift">
                        <CardContent className="flex items-start gap-4 p-6">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                            <p.icon className="size-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold leading-tight text-foreground">
                              {p.name}
                            </h3>
                            <Badge variant="secondary" className="mt-2 text-xs font-medium">
                              {p.form}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
