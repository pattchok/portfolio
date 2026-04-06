import { DM_SANS } from "@/lib/constants";

type JourneyStep = {
  org: string;
  role: string;
  period: string;
  subItems?: string[];
  parallel?: { name: string; desc?: string };
};

const steps: JourneyStep[] = [
  {
    org: "Chulalongkorn University",
    role: "B.B.A. in Finance & Accounting",
    period: "2015-2019",
  },
  {
    org: "Sertis",
    role: "Product Manager, AI & Data",
    period: "2019-2021",
  },
  {
    org: "Finnomena",
    role: "Product Manager, Fintech",
    period: "2022",
  },
  {
    org: "SCB 10X",
    role: "Product & Program Manager",
    period: "2023-2025",
    subItems: ["LingThai", "Typhoon", "CS Copilot"],
    parallel: { name: "Speedboat Studio", desc: "side project" },
  },
  {
    org: "University of Washington",
    role: "M.S. in Information Management",
    period: "2024-2025",
    parallel: { name: "The AI Collective", desc: "Seattle AI community" },
  },
  {
    org: "Joe Coffee",
    role: "what's next",
    period: "present",
  },
];

export default function JourneyMap() {
  return (
    <div className="relative py-6">
      {/* Vertical gradient line */}
      <div
        className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[2px]"
        style={{
          background: "linear-gradient(to bottom, #F0C8BA, #C9A96E, #B8D4BF)",
          opacity: 0.6,
        }}
      />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <div key={step.org} className="relative pl-12 md:pl-14">
            {/* Node dot */}
            <div
              className="absolute left-[12px] md:left-[16px] top-[6px] w-[14px] h-[14px] rounded-full border-2"
              style={{
                borderColor: i === steps.length - 1 ? "#B8D4BF" : "#C9A96E",
                backgroundColor: i === steps.length - 1 ? "#B8D4BF" : "#FAF5EE",
              }}
            />

            {/* Main content */}
            <div>
              <p className="text-muted text-xs mb-0.5">{step.period}</p>
              <h4
                className="text-text leading-tight"
                style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.05rem" }}
              >
                {step.org}
              </h4>
              <p className="text-muted text-sm">{step.role}</p>

              {/* Sub-items (e.g. projects under SCB 10X) */}
              {step.subItems && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {step.subItems.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: "rgba(201,169,110,0.35)",
                        color: "#8C5E48",
                        backgroundColor: "rgba(201,169,110,0.08)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Parallel activity */}
              {step.parallel && (
                <div
                  className="mt-2 pl-3 border-l-2"
                  style={{ borderColor: "rgba(184,212,191,0.5)" }}
                >
                  <p className="text-sm text-brown" style={{ fontWeight: 500 }}>
                    {step.parallel.name}
                  </p>
                  {step.parallel.desc && (
                    <p className="text-xs text-muted">{step.parallel.desc}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
