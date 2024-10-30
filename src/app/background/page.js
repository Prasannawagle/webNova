"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-60 md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-2xl text-white relative z-20 text-center"
        )}
      >
        Transforming Ideas into
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Digital Experiences
      </p>
    </div>
  );
}
