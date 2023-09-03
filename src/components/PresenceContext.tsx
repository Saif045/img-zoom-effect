"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";

const PresenceContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence  mode="wait">
      {children} 
    </AnimatePresence>
  );
};

export default PresenceContext;
