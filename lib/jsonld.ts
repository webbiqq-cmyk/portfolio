import { site } from "@/content/site";
import { education } from "@/content/education";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.photo.image.src}`,
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    nationality: { "@type": "Country", name: "Bahrain" },
    address: { "@type": "PostalAddress", addressCountry: "BH" },
    sameAs: [site.linkedin, ...site.githubs.map((g) => g.href)],
    knowsLanguage: site.languages.map((l) => l.name),
    alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
    worksFor: { "@type": "Organization", name: "WestPoint Home Bahrain W.L.L." },
  };
}
