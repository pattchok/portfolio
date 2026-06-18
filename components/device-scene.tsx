import Link from "next/link";

// Each featured scene is an SVG (2000×900) with an optional screen cutout where
// a looping video is overlaid. Coordinates are fractions of the viewBox.
const SCENES = {
  typhoon: {
    src: "/home/featured-typhoon.svg",
    screen: { left: 489 / 2000, top: 113 / 900, width: (1496 - 489) / 2000, height: (755 - 113) / 900 },
  },
  copilot: {
    src: "/home/featured-copilot.svg",
    screen: { left: 489 / 2000, top: 113 / 900, width: (1496 - 489) / 2000, height: (755 - 113) / 900 },
  },
  "7-eleven": {
    src: "/home/featured-7-eleven.svg",
    screen: null, // no video — the SVG is shown as-is
  },
} as const;

export type SceneKey = keyof typeof SCENES;

const ASPECT = "2000 / 900";

export function DeviceScene({
  scene,
  video,
  href,
  title,
}: {
  scene: SceneKey;
  video?: string;
  href: string;
  title: string;
}) {
  const s = SCENES[scene];

  return (
    <Link href={href} className="group block">
      <div
        className="relative mx-auto w-[80%] overflow-hidden rounded-[15px] transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: ASPECT }}
      >
        {/* Scene artwork (bottom layer) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.src}
          alt={title}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {/* Optional video overlaid inside the screen area */}
        {s.screen && video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute object-cover"
            style={{
              left: `${s.screen.left * 100}%`,
              top: `${s.screen.top * 100}%`,
              width: `${s.screen.width * 100}%`,
              height: `${s.screen.height * 100}%`,
              borderRadius: "1%",
            }}
          />
        )}
      </div>
    </Link>
  );
}
