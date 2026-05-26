import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { BuildingReveal } from "@/components/sections/BuildingReveal";
import { SpacesCarousel } from "@/components/sections/SpacesCarousel";
import { CardStack } from "@/components/sections/CardStack";
import { MembershipTiers } from "@/components/sections/MembershipTiers";
import { CareerLabSection } from "@/components/sections/CareerLabSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { CafeSection } from "@/components/sections/CafeSection";
import { UnboxingSection } from "@/components/sections/UnboxingSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { PlatinumSection } from "@/components/sections/PlatinumSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <BuildingReveal />
      <SpacesCarousel />
      <CardStack />
      <MembershipTiers />
      <CareerLabSection />
      <StudioSection />
      <CafeSection />
      <UnboxingSection />
      <SocialProof />
      <PartnerSection />
      <PlatinumSection />
      <FinalCTA />
    </>
  );
}
