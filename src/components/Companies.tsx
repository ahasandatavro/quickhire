import vodafoneLogo from '../assets/company/vodafone.png';
import intelLogo from '../assets/company/intel.png';
import teslaLogo from '../assets/company/TESLA.png';
import amdLogo from '../assets/company/amd.png';
import talkitLogo from '../assets/company/talkit.png';

const LOGO_COMMON_CLASSES = 'object-contain';

export default function Companies() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <p className="font-epilogue text-sm md:text-base text-[#202430]/60 mb-6 ml-4">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center gap-8 justify-between ">
          <img
            src={vodafoneLogo}
            alt="Vodafone"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 40, width: 182, filter: 'grayscale(1)', opacity: 0.7 }}
          />
          <img
            src={intelLogo}
            alt="Intel"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 160, filter: 'grayscale(1)', opacity: 0.3 }}
          />
          <img
            src={teslaLogo}
            alt="Tesla"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 150, filter: 'grayscale(1)', opacity: 0.3 }}
          />
          <img
            src={amdLogo}
            alt="AMD"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 150, filter: 'grayscale(1)', opacity: 0.3 }}
          />
          <img
            src={talkitLogo}
            alt="Talkit"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 170, filter: 'grayscale(1)', opacity: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
