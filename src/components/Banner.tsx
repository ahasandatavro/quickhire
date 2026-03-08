import dashboardImg from '../assets/dashboard/dashboard.png';

export default function Banner() {
  return (
    // top space only; no padding bottom so it touches next section
    <section className="pt-16 pb-0 bg-white">
      <div className="max-w-[1440px] mx-auto px-0 md:px-12">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: '#4640DE',
            clipPath: 'polygon(6% 0, 100% 0, 100% 85%, 94% 100%, 0 100%, 0 15%)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 py-30 lg:px-16 lg:pt-14 lg:pb-0 min-h-[260px] lg:min-h-[360px]">
            {/* Left: text block (vertically centered) */}
            <div className="flex-1 flex items-center text-white max-w-md lg:max-w-lg px-5 sm:px-8 lg:px-0">
              <div>
                <h2 className="font-clash text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-tight">
                  Start posting
                  <br />
                  jobs today
                </h2>
                <p className="font-epilogue mt-4 text-base lg:text-lg text-white/80">
                  Start posting jobs for only $10.
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 bg-white text-[#4640DE] font-epilogue font-semibold text-sm lg:text-base"
                >
                  Sign Up For Free
                </button>
              </div>
            </div>

            {/* Right: dashboard image touching bottom */}
            <div className="flex-1 w-full flex items-end justify-start lg:justify-end">
              <img
                src={dashboardImg}
                alt="QuickHire dashboard preview"
                className="w-full max-w-none lg:max-w-[600px] h-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

