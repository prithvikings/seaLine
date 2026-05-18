import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import DashboardPreview from "./components/DashboardPreview";
import Trusted from "./components/Trusted";
import Metrics from "./components/Metrics";
import MainFeatures from "./components/MainFeatures";
import UseCases from "./components/UseCases";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blog";
import FAQ from "./components/Faq"; // <-- Import
import CTA from "./components/CTA";
import Footer from "./components/Footer"; // <-- Import

const LandingPage = () => {
  return (
    <div className="bg-zinc-50 min-h-screen w-full flex flex-col">
      <Navbar />
      <Divider />
      <Hero />
      <DashboardPreview />
      <Trusted />
      <Divider heightClass="h-20" />
      <Metrics />
      <Divider heightClass="h-20" />
      <MainFeatures />
      <Divider heightClass="h-20" />
      <UseCases />
      <Comparison />
      <Divider heightClass="h-20" />
      <Pricing />
      <Divider heightClass="h-20" />
      <Blogs />
      <Divider heightClass="h-20" />
      <FAQ /> {/* <-- Add FAQ section */}
      <Divider heightClass="h-20" /> {/* <-- Add trailing diagonal divider */}
      <CTA />
      <Divider heightClass="h-20" />
      <Footer />
    </div>
  );
};

export default LandingPage;
