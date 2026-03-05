import { FiFacebook, FiInstagram, FiDribbble, FiLinkedin, FiTwitter } from 'react-icons/fi';

const aboutLinks = ['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'];
const resourceLinks = ['Help Docs', 'Guide', 'Updates', 'Contact Us'];

export default function Footer() {
  return (
    <footer className="bg-[#1F2438] text-[#D6DDEB] ">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#4640DE] flex items-center justify-center text-white font-bold">
                Q
              </div>
              <span className="font-clash text-[28px] font-semibold text-white">QuickHire</span>
            </div>
            <p className="mt-5 max-w-[320px] font-epilogue text-[16px] leading-[150%] text-[#D6DDEB]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          <div>
            <h3 className="font-clash text-[26px] font-semibold text-white">About</h3>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((link) => (
                <li key={link} className="font-epilogue text-[18px] text-[#D6DDEB] hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-clash text-[26px] font-semibold text-white">Resources</h3>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link} className="font-epilogue text-[18px] text-[#D6DDEB] hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-clash text-[26px] font-semibold text-white">Get job notifications</h3>
            <p className="mt-4 font-epilogue text-[16px] leading-[150%] text-[#D6DDEB]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="mt-6 flex gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="h-14 flex-1 bg-white px-4 text-[#25324B] font-epilogue text-[20px] outline-none"
              />
              <button
                type="button"
                className="h-14 px-6 bg-[#4640DE] text-white font-epilogue text-[20px] font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-epilogue text-[16px] text-[#D6DDEB]">2021 @ QuickHire. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[FiFacebook, FiInstagram, FiDribbble, FiLinkedin, FiTwitter].map((Icon, idx) => (
              <button
                type="button"
                key={idx}
                className="h-9 w-9 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors flex items-center justify-center"
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

