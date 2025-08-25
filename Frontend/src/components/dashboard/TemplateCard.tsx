import React from "react";

type Props = {
  imageUrl: string;
  title: string;
};

export default function TemplateCard({ imageUrl, title }: Props) {
  return (
    <div className="relative group w-72 flex-shrink-0 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="text-sm font-semibold text-[#111827] truncate">{title}</h4>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        <button className="px-3 py-2 text-sm rounded-lg bg-white hover:bg-gray-100 shadow">Preview</button>
        <button className="px-3 py-2 text-sm rounded-lg bg-[#6C63FF] text-white hover:bg-[#5a52e6] shadow">Use Template</button>
      </div>
    </div>
  );
}


