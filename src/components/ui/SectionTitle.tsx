import React from "react";

interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ kicker, title, subtitle }) => (
  <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    {kicker && (
      <div className="uppercase tracking-widest text-xs md:text-sm text-neutral-500 mb-2">
        {kicker}
      </div>
    )}
    <h2 className="font-[KlarheitGrotesk] text-2xl md:text-4xl lg:text-5xl leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-3xl">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
