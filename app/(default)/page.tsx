export const metadata = {
  title: "Hikari | Soluciones Tecnológicas Innovadoras en Desarrollo Web y Aplicaciones Móviles",
  description: "En Hikari, transformamos ideas en soluciones digitales. Expertos en desarrollo web y aplicaciones móviles, ofrecemos claridad, enfoque y tecnología moderna para impulsar tu negocio.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
