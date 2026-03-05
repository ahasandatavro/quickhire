import JobCard, { type Job } from './JobCard';

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description:
      'Revolut is looking for Email Marketing to help team manage campaigns and drive user engagement...',
    type: 'Full Time',
    tags: [
      { id: 'marketing', label: 'Marketing', colorClass: 'bg-[#FFEEDD] text-[#BC5B00]' },
      { id: 'design', label: 'Design', colorClass: 'bg-[#E5F5FF] text-[#0074CC]' },
    ],
  },
  {
    id: '2',
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    description:
      'Dropbox is looking for Brand Designer to help the team deliver high quality visuals for campaigns...',
    type: 'Full Time',
    tags: [
      { id: 'design', label: 'Design', colorClass: 'bg-[#E5F5FF] text-[#0074CC]' },
      { id: 'business', label: 'Business', colorClass: 'bg-[#ECE7FF] text-[#4C3CD8]' },
    ],
  },
  // Add more mock jobs as needed; easy to swap with API data later
] as const;

export default function FeaturedJobs() {
  // Later you can replace mockJobs with data from an API:
  // const [jobs, setJobs] = useState<Job[]>([]);
  // useEffect(() => { fetch(...).then(setJobs); }, []);
  const jobs = mockJobs;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-clash text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[110%] text-[#25324B]">
            <span className="font-clash">Featured</span>{' '}
            <span className="font-clash text-[#26A4FF]">jobs</span>
          </h2>

          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#4640DE] hover:opacity-80"
          >
            Show all jobs <span>→</span>
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

