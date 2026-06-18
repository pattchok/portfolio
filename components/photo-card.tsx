import Image from "next/image";

export function PhotoCard({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  return (
    <div className="group relative aspect-[1400/900] w-full overflow-hidden bg-stone-100 transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-2xl">
      <Image
        src={src}
        alt={caption}
        fill
        sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      {/* Location overlay — fades in on hover */}
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="p-4 text-sm font-medium text-white">{caption}</span>
      </div>
    </div>
  );
}
