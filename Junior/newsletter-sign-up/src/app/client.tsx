"use client";

import { motion, AnimatePresence } from "framer-motion";
import ThemeRegistry from "./ThemeRegistry";
import { PropsWithChildren } from "react";

import { useSelectedLayoutSegment } from "next/navigation";
import FrozenRouter from "@/components/FrozenRouter";

// Client wraps any client/rsc components with AnimatePresence
export default function Client({ children }: PropsWithChildren) {
  const segment = useSelectedLayoutSegment();
  return (
    <AnimatePresence
      initial
      mode="wait"
      onExitComplete={() => console.log("triggered")}
    >
      <ThemeRegistry options={{ key: "mui" }} key={segment}>
        <motion.main
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 100,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.main>
      </ThemeRegistry>
    </AnimatePresence>
  );
}
