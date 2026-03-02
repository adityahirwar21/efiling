import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/services";

import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceBenefits } from "../components/service/ServiceBenefits";
import { ServiceDocuments } from "../components/service/ServiceDocuments";
import { ServiceProcess } from "../components/service/ServiceProcess";
import { ServicePricing } from "../components/service/ServicePricing";
import { ServiceFAQ } from "./service/ServiceFaq";

export const ServicePage = () => {
  const { categoryId, serviceId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const service = category?.services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Service Not Found
        </h1>
        <p className="mt-4 text-slate-600">
          We're working on adding more services.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <ServiceHero service={service} />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceDocuments documents={service.documents} />
      <ServiceProcess process={service.process} />
      <ServicePricing pricing={service.pricing} />
      <ServiceFAQ faqs={service.faqs} />
    </div>
  );
};