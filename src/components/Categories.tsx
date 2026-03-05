import designIcon from '../assets/category/design.png';
import salesIcon from '../assets/category/sales.png';
import marketingIcon from '../assets/category/mike_white.png';
import financeIcon from '../assets/category/finance.png';
import technologyIcon from '../assets/category/technology.png';
import engineeringIcon from '../assets/category/engineering.png';
import businessIcon from '../assets/category/businness.png';
import humanIcon from '../assets/category/humanResource.png';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: 'Design',
    jobsLabel: '235 jobs available',
    icon: <img src={designIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Sales',
    jobsLabel: '756 jobs available',
    icon: <img src={salesIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Marketing',
    jobsLabel: '140 jobs available',
    // marketing icon source is white; invert it by default to make it dark,
    // then remove invert on hover so it becomes white on the purple background
    icon: <img src={marketingIcon} alt="" className="w-12 h-12 transition invert group-hover:invert-0" aria-hidden />,
  },
  {
    title: 'Finance',
    jobsLabel: '325 jobs available',
    icon: <img src={financeIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Technology',
    jobsLabel: '436 jobs available',
    icon: <img src={technologyIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Engineering',
    jobsLabel: '542 jobs available',
    icon: <img src={engineeringIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Business',
    jobsLabel: '211 jobs available',
    icon: <img src={businessIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
  {
    title: 'Human Resource',
    jobsLabel: '346 jobs available',
    icon: <img src={humanIcon} alt="" className="w-12 h-12 transition group-hover:brightness-0 group-hover:invert" aria-hidden />,
  },
] as const;

export default function Categories() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-clash text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[110%] text-[#25324B]">
            <span className="font-clash">Explore by </span>
            <span className="font-clash text-[#26A4FF]">category</span>
          </h2>
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#4640DE] hover:opacity-80"
          >
            Show all jobs <span>→</span>
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              icon={cat.icon}
              title={cat.title}
              jobsLabel={cat.jobsLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

