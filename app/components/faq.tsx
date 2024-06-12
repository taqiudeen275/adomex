"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "../aceternity_ui/stack-card";

export function FAQ({items}:any) {
  return (
    <div className="h-[30rem] flex items-center flex-col justify-center w-full">
        <h1 className="mb-8 text-3xl text-primary">Frequent Asked Questions (FAQ)</h1>
      <CardStack items={items} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-yellow-100 text-[#8E6428] dark:bg-[#8E6428]/[0.2] dark:text-[#E1BE6D]  rounded-sm px-2 mr-2 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
