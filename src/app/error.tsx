"use client";

import ErrorBoundary from "@/components/ui/error-boundary";
import { ErrorProps } from "@/types/main.types";
import React, { FC } from "react";

const GlobalErrorPage: FC<ErrorProps> = ({ error, reset }) => {
  return <ErrorBoundary error={error} reset={reset} context="general" />;
};

export default GlobalErrorPage;
