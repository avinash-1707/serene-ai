import { CallToAction } from "@/components/landing-page/CallToAction";
import { Footer } from "@/components/landing-page/Footer";
import { HeroSection } from "@/components/landing-page/HeroSection";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { MoodEntryWidget } from "@/components/ui/mood-entry-widget";
import { TestimonialJourneySection } from "@/components/ui/testimonial-journey-section" ;
import { LandingNavbar } from "@/components/landing-page/Navbar";

interface PageProps {
  searchParams: Promise<{
    loginRequired?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-indigo-100 to-white relative overflow-hidden">
    

      <LandingNavbar searchParamsPromise={searchParams} />

      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Mood Entry Widget */}
      <MoodEntryWidget />

      {/* Testimonial Journey Section */}
      <TestimonialJourneySection />

      {/* Additional Content */}

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
