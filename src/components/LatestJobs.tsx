import heroPattern from '../assets/Hero/hero_pattern.png';

type MiniTag = {
  id: string;
  label: string;
  className: string;
};

type MiniJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  logoText: string;
  logoBg: string;
  tags: MiniTag[];
};

const jobs: MiniJob[] = [
  {
    id: '1',
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    logoText: 'N',
    logoBg: '#34D399',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '2',
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, USA',
    logoText: 'D',
    logoBg: '#1F6FFF',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '3',
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    logoText: 'T',
    logoBg: '#22D3EE',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '4',
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    logoText: 'P',
    logoBg: '#F87171',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '5',
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    logoText: 'N',
    logoBg: '#2DD4BF',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '6',
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Francisco, USA',
    logoText: 'M',
    logoBg: '#3B82F6',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '7',
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    logoText: 'U',
    logoBg: '#0EA5E9',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
  {
    id: '8',
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucern, Switzerland',
    logoText: 'W',
    logoBg: '#4F46E5',
    tags: [
      { id: 'full-time', label: 'Full-Time', className: 'bg-[#E7FBF5] text-[#20B486]' },
      { id: 'marketing', label: 'Marketing', className: 'bg-[#FFF4E6] text-[#E9A23B]' },
      { id: 'design', label: 'Design', className: 'bg-[#EEF1FF] text-[#5A50D8]' },
    ],
  },
];

function JobRow({ job }: { job: MiniJob }) {
  return (
    <article className="border border-[#E6EAF5] bg-white px-6 py-4">
      <div className="flex items-start gap-4">
        <div
          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white font-clash text-lg"
          style={{ backgroundColor: job.logoBg }}
        >
          {job.logoText}
        </div>
        <div className="min-w-0">
          <h3 className="font-clash text-[26px] font-semibold leading-[120%] text-[#25324B]">
            {job.title}
          </h3>
          <p className="mt-1 font-epilogue text-[17px] leading-[150%] text-[#7C8493]">
            {job.company} <span className="mx-1">•</span> {job.location}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag.id}
                className={`inline-flex items-center rounded-full px-3 py-1 font-epilogue text-xs font-medium ${tag.className}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LatestJobs() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8F8FD] py-16"
      style={{ clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 7%)' }}
    >
      <img
        src={heroPattern}
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-full w-[40%] object-cover opacity-20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-clash text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[110%] text-[#25324B]">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 font-epilogue text-sm font-medium text-[#4640DE] hover:opacity-80"
          >
            Show all jobs <span>→</span>
          </button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

