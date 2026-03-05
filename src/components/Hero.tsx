import heroPattern from '../assets/Hero/hero_pattern.png';
import heroPerson from '../assets/Hero/hero_person.png';
import textLine from '../assets/Hero/text_line.png';

export default function Hero() {
  return (
    <section
      className="relative h-[794px] bg-[#F8F8FD] overflow-hidden flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#F8F8FD',
        height: '794px',
        backgroundImage: `url(${heroPattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'auto 100%',
      }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 w-full max-w-[1440px] mx-auto shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#26A4FF] flex items-center justify-center text-white font-bold text-lg">
            Q
          </div>
          <span className="font-semibold text-[#25324B] text-xl">QuickHire</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#find-jobs" className="text-[#25324B] hover:text-[#26A4FF] transition-colors">
            Find Jobs
          </a>
          <a href="#companies" className="text-[#25324B] hover:text-[#26A4FF] transition-colors">
            Browse Companies
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#login" className="text-[#25324B] hover:text-[#26A4FF] transition-colors">
            Login
          </a>
          <a
            href="#signup"
            className="px-5 py-2.5 rounded-md text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4640DE' }}
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-6 md:px-12 py-6 lg:py-8 w-full max-w-[1440px] mx-auto flex-1 min-h-0">
        {/* Left: text + search */}
        <div className="flex-1 max-w-xl lg:max-w-2xl order-2 lg:order-1">
          <h1 className="font-clash text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#25324B] ">
            <span className="block">Discover</span>
            <span className="block">more than</span>
            <span className="text-[#26A4FF] relative inline-block mt-1">
              <span className="block">5000+ Jobs</span>
              <img
                src={textLine}
                alt=""
                className="absolute -bottom-12 left-0 w-full h-3 lg:h-10 object-contain object-left"
                aria-hidden
              />
            </span>
          </h1>
          <p className="font-epilogue mt-14 text-[#25324B]/70 text-base lg:text-lg max-w-lg">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search bar */}
          <div
            className="relative z-20 mt-10 lg:mt-12 w-[950px] flex flex-col sm:flex-row gap-5 p-4  bg-white shadow-sm border border-gray-100  sm:items-stretch"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
          >
            <div className="flex-1 flex items-center gap-4 px-6 py-4 text-gray-500 text-base sm:text-lg">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 min-w-0 bg-transparent outline-none text-[#25324B] placeholder:text-gray-400"
              />
            </div>
            <div className="flex-1 sm:max-w-[320px] flex items-center gap-4 px-6 py-4 text-gray-500 text-base sm:text-lg border-t sm:border-t-0 sm:border-l border-gray-100">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="flex-1 truncate text-[#25324B]">Florence, Italy</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button
              type="button"
              className="px-12 py-4  text-white font-medium text-base sm:text-lg whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#4640DE' }}
            >
              Search my job
            </button>
          </div>

          <p className="font-epilogue mt-4 text-[16px] text-gray-500">
            Popular : UI Designer, UX Researcher, Android, Admin.
          </p>
        </div>

        {/* Right: person (pattern in section background) */}
        <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-none order-1 lg:order-2 flex justify-center lg:justify-end items-end min-h-0 overflow-hidden">
          <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
            <img
              src={heroPerson}
              alt="Person pointing towards job opportunities"
              className="object-contain object-bottom w-[820px] h-[720px]"
            />
          </div>
        </div>
      </div>
      <div className="hero-diagonal" />
    </section>
  );
}
