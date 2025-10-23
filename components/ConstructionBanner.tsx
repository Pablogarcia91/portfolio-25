"use client";

export default function ConstructionBanner() {
  const text = "🚧 Site under construction — Will be finished before Sagrada Familia 🚧";

  return (
    <div className="construction-banner relative w-full bg-[#FFD700] text-black py-2 overflow-hidden z-50">
      <div className="construction-stripes absolute inset-0 opacity-20"></div>
      <div className="relative z-10 whitespace-nowrap">
        <div className="construction-scroll inline-block">
          <span className="text-sm md:text-base font-normal inline-block px-8">
            {text}
          </span>
          <span className="text-sm md:text-base font-normal inline-block px-8">
            {text}
          </span>
          <span className="text-sm md:text-base font-normal inline-block px-8">
            {text}
          </span>
          <span className="text-sm md:text-base font-normal inline-block px-8">
            {text}
          </span>
          <span className="text-sm md:text-base font-normal inline-block px-8">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
