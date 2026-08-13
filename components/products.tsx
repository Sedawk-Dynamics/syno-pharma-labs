"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./reveal";

export type Product = {
  id: string;
  name: string;
  generic: string;
  form: string;
  pack: string;
  image: string;
  description: string;
  category: "gastro" | "hepato" | "supplements";
};

const categories: {
  id: string;
  label: string;
  blurb: string;
  items: Product[];
}[] = [
  {
    id: "gastro",
    label: "Gastroenterology",
    blurb: "Acid control, GI motility and H. pylori eradication management for everyday gastroenterology practice.",
    items: [
      {
        id: "pancide-40",
        name: "Pancide 40 mg Tab",
        generic: "Pantoprazole Gastro-Resistant Tablets I.P. 40 mg",
        form: "Tablet",
        pack: "10 × 15 Tablets",
        image: "/pancide-40.jpeg",
        description: "Targeted proton pump inhibitor for effective acid suppression, GERD, erosive esophagitis & peptic ulcer healing.",
        category: "gastro",
      },
      {
        id: "pancide-dsr",
        name: "Pancide DSR Cap",
        generic: "Pantoprazole Gastro-resistant & Domperidone Prolonged-release Capsules I.P.",
        form: "Capsule",
        pack: "10 × 15 Capsules",
        image: "/pancide-dsr.jpeg",
        description: "Dual-action acid control with prokinetic motility management for reflux esophagitis and persistent heartburn.",
        category: "gastro",
      },
      {
        id: "pancide-it",
        name: "Pancide IT Cap",
        generic: "Pantoprazole 40 mg + Itopride Hydrochloride 150 mg (SR) Capsules",
        form: "Capsule",
        pack: "10 × 10 Capsules",
        image: "/pancide-it.jpeg",
        description: "Advanced prokinetic-PPI combination engineered for non-ulcer dyspepsia & delayed gastric emptying.",
        category: "gastro",
      },
      {
        id: "pancide-l",
        name: "Pancide L Cap",
        generic: "Enteric Coated Pantoprazole Sodium & Levosulpiride (SR) Capsules",
        form: "Capsule",
        pack: "10 × 10 Capsules",
        image: "/pancide-l.jpeg",
        description: "Synergistic PPI & prokinetic formulation for refractory GERD, functional dyspepsia & nausea.",
        category: "gastro",
      },
      {
        id: "pancide-hp-kit",
        name: "Pancide HP Kit",
        generic: "Combipack of Clarithromycin, Pantoprazole & Amoxicillin Tablets",
        form: "Combi Kit",
        pack: "7 × 6 Tablets",
        image: "/pancide-hp-kit.jpeg",
        description: "Standardized 7-day triple therapy combipack for Helicobacter pylori infection eradication.",
        category: "gastro",
      },
      {
        id: "pancide-iv",
        name: "Pancide IV",
        generic: "Pantoprazole for Injection 40 mg (Lyophilized)",
        form: "Injection",
        pack: "1 × 5 Vials",
        image: "/pancide-iv.jpeg",
        description: "Rapid intravenous acid suppression for acute upper GI bleeding and critical gastric ulcer care.",
        category: "gastro",
      },
      {
        id: "anoraft-suspension",
        name: "Anoraft Suspension",
        generic: "Sodium Alginate, Sodium Bicarbonate & Calcium Carbonate Suspension",
        form: "Suspension",
        pack: "200 mL",
        image: "/anoraft-suspension.jpeg",
        description: "Fast-acting raft-forming barrier delivering rapid acid reflux relief in 3 minutes lasting up to 4 hours.",
        category: "gastro",
      },
    ],
  },
  {
    id: "hepato",
    label: "Hepatology & Special Care",
    blurb: "Hepatoprotective support and targeted GI antimicrobial therapy for specialist care.",
    items: [
      {
        id: "urodax-150",
        name: "Urodax 150 mg Tab",
        generic: "Ursodeoxycholic Acid Tablets IP 150 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/urodax-150.jpeg",
        description: "Hepatoprotective and choleretic agent for radiolucent gallstone dissolution & chronic liver protection.",
        category: "hepato",
      },
      {
        id: "urodax-300",
        name: "Urodax 300 Tab",
        generic: "Ursodeoxycholic Acid Tablets IP 300 mg",
        form: "Tablet",
        pack: "10 × 15 Tablets",
        image: "/urodax-300.jpeg",
        description: "High-strength ursodeoxycholic acid for primary biliary cholangitis & fatty liver management.",
        category: "hepato",
      },
      {
        id: "rifanac-200",
        name: "Rifanac 200",
        generic: "Rifaximin Tablets 200 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-200.jpeg",
        description: "Non-systemic GI-targeted antibiotic for acute infectious traveler's diarrhea & gut infection control.",
        category: "hepato",
      },
      {
        id: "rifanac-400",
        name: "Rifanac 400",
        generic: "Rifaximin Tablets 400 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-400.jpeg",
        description: "Targeted intestinal antimicrobial for bacterial overgrowth, intestinal infection & IBS-D.",
        category: "hepato",
      },
      {
        id: "rifanac-550",
        name: "Rifanac 550",
        generic: "Rifaximin Tablets 550 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-550.jpeg",
        description: "First-line therapy for reducing recurrence of overt hepatic encephalopathy and managing IBS-D.",
        category: "hepato",
      },
    ],
  },
  {
    id: "supplements",
    label: "Supplements",
    blurb: "Advanced nutritional and restorative formulations for liver care, stamina and metabolic wellness.",
    items: [
      {
        id: "folovit-forte",
        name: "Folovit-Forte Cap",
        generic: "CoQ10, L-Carnitine, Lycopene, L-Arginine, B12, Folic Acid & Zinc",
        form: "Capsule",
        pack: "10 × 1 × 10 Capsules",
        image: "/folovit-forte.jpeg",
        description: "Potent antioxidant & cellular protection formula supporting liver function, energy production & cardiovascular health.",
        category: "supplements",
      },
      {
        id: "folovit-s",
        name: "Folovit-S Suspension",
        generic: "Silymarin, L-Carnitine, N-Acetyl Cysteine & B-Complex (Sugar Free)",
        form: "Suspension",
        pack: "200 mL",
        image: "/folovit-s.jpeg",
        description: "Sugar-free liquid liver care & restorative formula designed for detoxification, appetite improvement & stamina.",
        category: "supplements",
      },
    ],
  },
];

const getFormBadgeStyle = (form: string) => {
  switch (form.toLowerCase()) {
    case "tablet":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "capsule":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "suspension":
      return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
    case "injection":
      return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    case "combi kit":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquireClick = (productName: string) => {
    setSelectedProduct(null);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const productInput = document.getElementById("enq-product") as HTMLInputElement | null;
      if (productInput) {
        productInput.value = productName;
        productInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  };

  return (
    <section id="products" className="bg-secondary/40 py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prescription Portfolio"
          title="Our Pharmaceutical Products"
          description="High-quality, prescription-grade pharmaceutical portfolio spanning Gastroenterology, Hepatology and Nutritional Care."
        />

        <Reveal className="mt-12" delay={0.1}>
          <Tabs defaultValue="gastro" className="w-full">
            <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-1.5 bg-background p-2 shadow-soft rounded-2xl border border-border/60">
              {categories.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                >
                  <span>{c.label}</span>
                  <span className="ml-2 rounded-full bg-muted-foreground/15 px-2 py-0.5 text-xs font-normal">
                    {c.items.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-10">
                <p className="mx-auto max-w-2xl text-center text-sm font-medium text-muted-foreground">
                  {c.blurb}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {c.items.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <Card className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:border-primary/50 hover:shadow-lift flex flex-col justify-between h-full">
                        {/* Product Image Box */}
                        <div
                          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-slate-50/80 dark:bg-slate-900/50 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-900/80 transition-colors duration-300 p-5 border-b border-border/90 group-hover:border-primary/30 flex items-center justify-center"
                          onClick={() => setSelectedProduct(p)}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.07)] transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Name & Details Button */}
                        <CardContent className="p-4 sm:p-4.5 flex items-center justify-between gap-3 bg-card">
                          <h3
                            className="text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors cursor-pointer tracking-tight"
                            onClick={() => setSelectedProduct(p)}
                          >
                            {p.name}
                          </h3>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedProduct(p)}
                            className="shrink-0 h-8.5 px-3.5 text-xs font-semibold text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground rounded-xl shadow-2xs transition-all duration-200"
                          >
                            Details
                          </Button>
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

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-xl p-0 overflow-hidden rounded-2xl border border-border">
            <div className="relative bg-slate-50 dark:bg-slate-900/80 p-6 flex items-center justify-center border-b border-border">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-64 object-contain drop-shadow-md"
              />
              <Badge
                variant="outline"
                className={`absolute top-4 left-4 text-xs font-semibold ${getFormBadgeStyle(selectedProduct.form)}`}
              >
                {selectedProduct.form}
              </Badge>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader className="text-left space-y-1">
                <DialogTitle className="text-2xl font-extrabold text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-sm font-semibold text-teal">
                  {selectedProduct.generic}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-border/70 p-3 bg-secondary/30">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Dosage Form
                  </span>
                  <span className="text-sm font-bold text-foreground mt-0.5 block">
                    {selectedProduct.form}
                  </span>
                </div>
                <div className="rounded-xl border border-border/70 p-3 bg-secondary/30">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Packaging Spec
                  </span>
                  <span className="text-sm font-bold text-foreground mt-0.5 block">
                    {selectedProduct.pack}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  className="w-full sm:flex-1"
                  onClick={() => handleEnquireClick(selectedProduct.name)}
                >
                  <Send className="size-4 mr-2" /> Enquire About {selectedProduct.name}
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

