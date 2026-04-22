import Image from "next/image";

type HeroWorkBgProps = {
  /** Path to a full-width hero image (e.g. "/work/hero/hero-typhoon.png"). */
  image: string;
  alt?: string;
  /** Max height of the band on desktop (px). */
  height?: number;
  /** CSS object-position (e.g. "top", "center", "50% 20%"). */
  objectPosition?: string;
  /** Image aspect ratio as "W / H" (default "3 / 1" to match 2400×800 covers). */
  aspectRatio?: string;
};

export default function HeroWorkBg({
  image,
  alt = "",
  height = 800,
  objectPosition = "center",
  aspectRatio = "3 / 1",
}: HeroWorkBgProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio, maxHeight: `${height}px` }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
    </div>
  );
}
