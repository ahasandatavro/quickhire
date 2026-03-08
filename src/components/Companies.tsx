import vodafoneLogo from '../assets/company/vodafone.png';
import intelLogo from '../assets/company/intel.png';
import teslaLogo from '../assets/company/TESLA.png';
import amdLogo from '../assets/company/amd.png';
import talkitLogo from '../assets/company/talkit.png';

const LOGO_COMMON_CLASSES = 'h-auto lg:h-autoobject-cover ';

export default function Companies() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <p className="font-epilogue text-[18px] text-[#202430]/60 mb-6">
          Companies we helped grow
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 items-center">
          <img
            src={vodafoneLogo}
            alt="Vodafone"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 40, width: 182, maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.35 }}
          />
          <img
            src={intelLogo}
            alt="Intel"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 160, maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.35 }}
          />
          <img
            src={talkitLogo}
            alt="Talkit"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 170, maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.35 }}
          />
          <img
            src={amdLogo}
            alt="AMD"
            className={LOGO_COMMON_CLASSES}
            style={{ height: 30, width: 150, maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.35 }}
          />
          <img
            src={teslaLogo}
            alt="Tesla"
            className={`${LOGO_COMMON_CLASSES} col-span-2 md:col-span-1`}
            style={{ height: 30, width: 150, maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.35 }}
          />
        </div>
      </div>
    </section>
  );
}
