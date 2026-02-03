import React from "react";

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  badge: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  badge,
}) => {
  return (
    <section className="py-24 px-8 bg-linear-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6 text-gray-300">
          {description}
        </p>
        <div className="inline-block px-3 py-1 bg-green-400 text-gray-900 text-sm rounded">
          {badge}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
