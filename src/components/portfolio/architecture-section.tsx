import { ArrowDown, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";

const deliveryStages = [
  {
    index: "01",
    eyebrow: "Source",
    title: "CodeCommit",
    description: "Versioned application source",
  },
  {
    index: "02",
    eyebrow: "Delivery",
    title: "CodePipeline",
    description: "Automated release orchestration",
  },
  {
    index: "03",
    eyebrow: "Deploy",
    title: "Elastic Beanstalk",
    description: "Managed application deployment",
  },
] as const;

const runtimeServices = [
  { title: "RDS", description: "Relational application data" },
  { title: "S3", description: "Artifacts and object storage" },
] as const;

const foundationServices = [
  {
    index: "07",
    title: "CloudFormation",
    description: "Defines and provisions repeatable environments as code.",
  },
  {
    index: "08",
    title: "IAM",
    description: "Controls identities, service roles, and environment access.",
  },
] as const;

function FlowConnector() {
  return (
    <div className="flex h-10 items-center justify-center sm:h-auto sm:min-w-8" aria-hidden="true">
      <ArrowDown className="size-4 stroke-[1.25] sm:hidden" />
      <ArrowRight className="hidden size-4 stroke-[1.25] sm:block" />
    </div>
  );
}

function ArchitectureNode({
  index,
  eyebrow,
  title,
  description,
  emphasized = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  emphasized?: boolean;
}) {
  return (
    <div className={`flex min-h-32 flex-col items-center justify-center border p-4 text-center sm:items-stretch sm:justify-between sm:text-left ${emphasized ? "border-black bg-black text-white" : "border-black bg-white text-black"}`}>
      <div className="flex w-full items-center justify-between font-mono text-[9px] uppercase tracking-[0.1em]">
        <span className={emphasized ? "text-white/55" : "text-black/45"}>{index}</span>
        <span className={emphasized ? "text-white/55" : "text-black/45"}>{eyebrow}</span>
      </div>
      <div className="mt-5">
        <p className="font-mono text-xs font-semibold">{title}</p>
        <p className={`mt-2 text-[11px] leading-5 ${emphasized ? "text-white/60" : "text-black/50"}`}>{description}</p>
      </div>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-pad scroll-mt-28 bg-white px-5 text-black sm:px-8 lg:px-10 xl:scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          label="Architecture"
          title="A delivery path that is easy to reason about."
          description="A sanitized reference architecture based on the AWS services I use in enterprise application delivery."
          inverted
        />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[.65fr_1.35fr]">
          <div className="border-t border-black pt-5">
            {[
              ["Delivery plane", "Source changes move through an explicit, automated release path."],
              ["Runtime boundary", "Managed compute connects to application data and object storage."],
              ["Control plane", "Infrastructure, access, and diagnostics remain visible and repeatable."],
            ].map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[30px_1fr] gap-4 border-b border-black/15 py-5">
                <span className="font-mono text-[10px] text-black/45">0{index + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-black">
            <div className="flex flex-col items-start gap-1 border-b border-black px-4 py-4 font-mono text-[9px] uppercase tracking-[0.08em] sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-[10px] sm:tracking-[0.1em]">
              <span>aws-reference-architecture.yml</span>
              <span className="text-black/45">sanitized / logical view</span>
            </div>

            <figure className="p-4 sm:p-8">
              <figcaption className="sr-only">
                AWS delivery architecture showing CodeCommit flowing through CodePipeline to Elastic Beanstalk, an EC2 runtime connected to RDS and S3, with CloudFormation, IAM, and CloudShell supporting the environment.
              </figcaption>

              <div className="border border-black/25 p-3 sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-black/15 pb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-black/45">
                  <span>Delivery flow</span>
                  <span>commit to deploy</span>
                </div>

                <div className="mt-4 grid items-stretch sm:grid-cols-[1fr_32px_1fr_32px_1fr]">
                  {deliveryStages.map((stage, index) => (
                    <div key={stage.title} className="contents">
                      <ArchitectureNode {...stage} emphasized={index === deliveryStages.length - 1} />
                      {index < deliveryStages.length - 1 ? <FlowConnector /> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center py-3 text-black/45" aria-hidden="true">
                <span className="font-mono text-[8px] uppercase tracking-[0.1em]">deploys and configures</span>
                <ArrowDown className="mt-1 size-4 stroke-[1.25]" />
              </div>

              <div className="border border-dashed border-black p-3 sm:p-5">
                <div className="flex flex-col gap-1 border-b border-black/15 pb-3 font-mono text-[9px] uppercase tracking-[0.1em] sm:flex-row sm:items-center sm:justify-between">
                  <span>Managed application environment</span>
                  <span className="text-black/45">logical runtime boundary</span>
                </div>

                <div className="mt-4 grid items-stretch sm:grid-cols-[1fr_32px_1fr]">
                  <ArchitectureNode
                    index="04"
                    eyebrow="Compute"
                    title="EC2"
                    description="Application runtime managed through the deployment environment"
                  />
                  <FlowConnector />
                  <div className="grid gap-3 sm:grid-rows-2">
                    {runtimeServices.map((service, index) => (
                      <div key={service.title} className="flex min-h-24 flex-col items-center justify-center border border-black p-4 text-center sm:items-stretch sm:text-left">
                        <div className="flex w-full items-center justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-black/45">
                          <span>0{index + 5}</span>
                          <span>{index === 0 ? "Data" : "Storage"}</span>
                        </div>
                        <div className="mt-4">
                          <p className="font-mono text-xs font-semibold">{service.title}</p>
                          <p className="mt-1 text-[11px] leading-5 text-black/50">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center py-3 text-black/45" aria-hidden="true">
                <span className="font-mono text-[8px] uppercase tracking-[0.1em]">provisioned and secured by</span>
                <ArrowDown className="mt-1 size-4 stroke-[1.25]" />
              </div>

              <div className="grid border-l border-t border-black sm:grid-cols-2">
                {foundationServices.map((service) => (
                  <div key={service.title} className="flex min-h-28 flex-col items-center justify-center border-b border-r border-black p-4 text-center sm:items-stretch sm:justify-between sm:text-left">
                    <span className="font-mono text-[9px] text-black/45">{service.index} / Foundation</span>
                    <div className="mt-4">
                      <p className="font-mono text-xs font-semibold">{service.title}</p>
                      <p className="mt-2 text-[11px] leading-5 text-black/50">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col items-center justify-between gap-3 border border-dashed border-black/45 px-4 py-4 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-black/45">09 / Operations</p>
                  <p className="mt-1 font-mono text-xs font-semibold">CloudShell</p>
                </div>
                <p className="max-w-sm text-[11px] leading-5 text-black/50 sm:text-right">Controlled diagnostics and environment operations</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-black/15 pt-4 font-mono text-[8px] uppercase tracking-[0.08em] text-black/40">
                <span>solid / delivery relationship</span>
                <span>dashed / managed boundary</span>
                <span>numbers / service sequence</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
