import BlogsPreview from "@/components/homepage/blogs";
import DNSSection from "@/components/homepage/dns-section";
import GlobeExperience from "@/components/homepage/globe/experience";
import SpeedUploads from "@/components/homepage/speedyuploads";
import CurvedSeperator from "@/components/ui/curved-seperator";

export default function Home() {
  return (
    <div>
      <section className="bg-black">
        <GlobeExperience />
      </section>

      <section className="bg-zinc-950">
        <svg width="w-screen" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q250,100 500,40 L500,0 Z" fill="black" />
        </svg>
        <DNSSection />

        <BlogsPreview />

        <CurvedSeperator flipped={true}>
          <SpeedUploads />
        </CurvedSeperator>

      </section>
    </div>
  );
}
