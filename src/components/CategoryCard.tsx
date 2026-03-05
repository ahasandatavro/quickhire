import type { ReactNode } from 'react';
import rightArrow from '../assets/category/right_arrow.png';

type CategoryCardProps = {
  icon: ReactNode;
  title: string;
  jobsLabel: string;
};

export default function CategoryCard({ icon, title, jobsLabel }: CategoryCardProps) {
  return (
    <button
      type="button"
      className="group flex h-full w-full flex-col justify-between border border-[#E6EAF5] bg-white px-7 py-6 text-left transition-colors duration-200 hover:border-[#4640DE] hover:bg-[#4640DE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4640DE]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center justify-center  p-3 text-2xl text-[#4640DE] transition-colors duration-200  group-hover:text-white">
          {icon}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-clash text-[24px] font-semibold leading-[120%] text-[#25324B] transition-colors duration-200 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 font-epilogue text-[18px] leading-[160%] text-[#7C8493] transition-colors duration-200 group-hover:text-white/80">
          {jobsLabel}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#7C8493] transition-colors duration-200 group-hover:text-white">
        <span>Explore jobs</span>
        <span style={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={rightArrow}
            alt=""
            className="w-6 h-6 transition group-hover:brightness-0 group-hover:invert"
            aria-hidden
          />
        </span>
      </div>
    </button>
  );
}

