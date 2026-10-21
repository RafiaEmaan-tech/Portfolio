import { PointerEffects, ScrollProgress } from "@/components/motion";
import { Nav } from "@/components/Nav";
import { About, Marquee } from "@/components/sections/About";
import { Contact, Faq, Footer } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { Skills } from "@/components/sections/Skills";
import { competencies, education, experience, faqs, profile, seo, siteUrl } from "@/lib/site";

const personId = `${siteUrl}/#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      givenName: "Rafia",
      familyName: "Eman",
      jobTitle: profile.currentTitle,
      description: seo.description,
      url: siteUrl,
      image: `${siteUrl}${profile.photo}`,
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.city,
        addressCountry: profile.country,
      },
      homeLocation: { "@type": "Place", name: profile.location },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.school,
        url: education.schoolUrl,
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: education.degree,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Human Resources Executive",
        occupationLocation: { "@type": "City", name: profile.city },
        skills: competencies.join(", "),
      },
      worksFor: {
        "@type": "Organization",
        name: experience[0].company,
        url: experience[0].companyUrl,
      },
      knowsAbout: competencies,
      knowsLanguage: ["en", "ur"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "en",
      mainEntity: { "@id": personId },
      dateModified: new Date("2026-10-21").toISOString(),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: seo.shortTitle,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <PointerEffects />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Lifecycle />
        <Expertise />
        <Experience />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
