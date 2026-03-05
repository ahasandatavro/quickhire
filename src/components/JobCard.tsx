type JobTag = {
  id: string;
  label: string;
  colorClass: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  logo?: string;
  tags: JobTag[];
};

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <article className="flex h-full max-h-[400px] flex-col border border-[#D6DDEB] bg-white px-8 py-8">
      <header className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center">
          {job.logo ? (
            <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 object-contain" />
          ) : (
            <span className="font-clash text-[58px] leading-none text-[#25324B]">
              {job.company.charAt(0)}
            </span>
          )}
        </div>
        <span className="inline-flex items-center border border-[#4640DE] px-6 py-2.5 font-epilogue text-[18px] font-medium text-[#4640DE]">
          {job.type}
        </span>
      </header>

      <div className="mt-7 min-h-[48px]">
        <h3 className="line-clamp-1 font-clash text-[24px] font-semibold leading-[120%] text-[#25324B]">
          {job.title}
        </h3>
        <p className="mt-2 line-clamp-1 font-epilogue text-[18px] leading-[160%] text-[#515B6F]">
          {job.company} <span className="mx-1 text-[#A8ADB7]">•</span> {job.location}
        </p>
      </div>

      <p className="mt-8 min-h-[86px] line-clamp-2 font-epilogue text-[18px] leading-[160%] text-[#7C8493]">
        {job.description}
      </p>

      <div className="mt-8 flex  flex-wrap items-start gap-3">
        {job.tags.map((tag) => (
          <span
            key={tag.id}
            className={`inline-flex items-center rounded-full px-5 py-2 text-[18px] font-medium leading-none font-epilogue ${tag.colorClass}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </article>
  );
}

