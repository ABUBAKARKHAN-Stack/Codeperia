"use client";

import ErrorBoundary from "@/components/ui/error-boundary";
import { ErrorProps } from "@/types/main.types";
import React, { FC } from "react";

const ServiceError: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <ErrorBoundary
      className="pt-20"
      error={error}
      reset={reset}
      context="service"
      homeUrl="/"
    />
  );
};

export default ServiceError;
