"use client";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { InstallationSection } from "@/components/sections/installation-section";
import { NoContractsSection } from "@/components/sections/no-contracts-section";
import { ConnectivitySection } from "@/components/sections/connectivity-section";
import { SpaceXSection } from "@/components/sections/spacex-section";
import { TrialSection } from "@/components/sections/trial-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1120]">
        <HeroSection />
        <ServicesSection />
        <InstallationSection />
        <NoContractsSection />
        <ConnectivitySection />
        <SpaceXSection />
        <TrialSection />
      </main>
    </>
  );
}