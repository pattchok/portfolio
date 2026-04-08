import { DM_SANS } from "@/lib/constants";

type JourneyStep = {
  org: string;
  role: string;
  period: string;
};

const steps: JourneyStep[] = [
  {
    org: "Chulalongkorn University",
    role: "B.B.A. in Finance & Accounting",
    period: "2015 – 2019",
  },
  {
    org: "Sertis",
    role: "Product Manager",
    period: "2019 – 2021",
  },
  {
    org: "Finnomena",
    role: "Product Manager",
    period: "2021 – 2022",
  },
  {
    org: "SCB 10X – Typhoon",
    role: "Senior Product Manager",
    period: "2023 – 2025",
  },
  {
    org: "University of Washington",
    role: "M.S. in Information Management (AI and Data Science)",
    period: "2024 – 2025",
  },
  {
    org: "Coffey Venture",
    role: "Senior Product Manager",
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
