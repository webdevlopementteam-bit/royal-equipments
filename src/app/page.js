import AboutCommercialSection from "@/sections/AboutCommercialSection";
import ClientsSection from "@/sections/ClientsSection";
import HomeBanner from "@/sections/Homebanner";
import OurWorkSection from "@/sections/OurWorkSection";
import WelcomeSection from "@/sections/WelcomeSection";
import React from "react";

function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Blurred Fixed Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{
          backgroundImage: "url('/home/home-bg.png')",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <HomeBanner />
        <WelcomeSection />
        <OurWorkSection />
        <ClientsSection />
        <AboutCommercialSection />
      </div>
    </main>
  );
}

export default Page;
