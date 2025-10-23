"use client";

export default function ConstructionBanner() {
  return (
    <div className="construction-banner relative w-full bg-[#FFD700] text-black py-2 overflow-hidden z-50">
      <div className="construction-stripes absolute inset-0 opacity-20"></div>
      <div className="relative z-10 text-center px-4">
        <p className="text-sm md:text-base font-bold">
          🚧 Sitio en construcción — Se terminará antes que la Sagrada Familia 🚧
        </p>
      </div>
    </div>
  );
}
