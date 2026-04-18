import Image from "next/image";

type HeroWorkBgProps = {
  /** Path to a full-width hero image (e.g. "/work/opentyphoon/hero.jpg"). */
  image: string;
  alt?: string;
  /** Max height of the band on desktop (px). Mobile scales down responsively. */
  height?: number;
  /** CSS object-position (e.g. "top", "center", "50% 20%"). */
  objectPosition?: string;
};

export default function HeroWorkBg({
  image,
  alt = "",
  height = 360,
  objectPosition = "center",
}: HeroWorkBgProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `clamp(220px, 55vw, ${height}px)` }}
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
