import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  cta: string;
  onClick?: () => void;
};

export default function FeatureCard({ title, description, imageUrl, cta, onClick }: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white/95 rounded-xl shadow-lg hover:shadow-xl transition ease-in-out hover:scale-[1.02] border border-gray-100 overflow-hidden w-full"
    >
      <img src={imageUrl} alt="" className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <span className="inline-block mt-3 text-[#6C63FF] font-medium">{cta} →</span>
      </div>
    </button>
  );
}


