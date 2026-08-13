import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { Leadership } from "@/components/leadership";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "SYNO PHARMA LABORATORIES PRIVATE LIMITED",
  alternateName: "Syno Pharma",
  email: "info@synopharma.in",
  telephone: "+91-7643085315",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2321 Gali No-35, Part-1, Sonia Vihar",
    addressLocality: "New Delhi",
    postalCode: "110094",
    addressCountry: "IN",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
