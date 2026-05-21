import React from "react";
import { Navigate } from "react-router-dom";

const OnboardingRoute = ({ children }) => {
  const completed = localStorage.getItem(
    "hasCompletedOnboarding"
  );

  // block only after onboarding completed
  if (completed === "true") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default OnboardingRoute;