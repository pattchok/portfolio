import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { DeviceScene } from "@/components/device-scene";
import { featuredProjects } from "@/lib/data";

export default function Home() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      {/* Hero */}
      <section className="pt-[2.5rem] pb-[2.5rem] sm:pt-[3.2rem] sm:pb-[3.2rem]">
        <Reveal>
          <h1 className="mx-auto max-w-5xl text-center font-serif text-4xl font-normal leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m Patt! I build products that make people&apos;s lives a
            little easier.
          </h1>
        </Reveal>
      </section>

      {/* Featured projects */}
      <section className="pb-24">
        <div className="flex flex-col gap-10">
          {featuredProjects.map((project, i) => {
            const video = "video" in project ? project.video : undefined;
            return (
              <Reveal key={project.title} delay={i * 0.05}>
                <DeviceScene
                  scene={project.scene}
                  video={video}
                  href={project.href}
                  title={project.title}
                />
                <Link href={project.href} className="group block">
                  <div className="mx-auto mt-4 flex w-[80%] items-baseline justify-between gap-6">
                    <h2 className="text-sm font-bold uppercase tracking-tight">
                      {project.left}
                    </h2>
                    <p className="text-right text-sm font-normal uppercase tracking-tight text-muted">
                      {project.right}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
