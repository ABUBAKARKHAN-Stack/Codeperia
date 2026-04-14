"use client";

import { PageTransition } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ServiceNotFoundSection = () => {
  return (
    <PageTransition>
      <section className="section-padding pt-32 pb-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Service Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServiceNotFoundSection;
