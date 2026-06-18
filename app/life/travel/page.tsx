import type { Metadata } from "next";
import { GalleryHeading, PhotoGrid } from "@/components/photo-grid";
import { photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Places I've been",
};

export default function TravelGalleryPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      <section className="pt-[2.5rem] pb-24 sm:pt-[3.2rem] sm:pb-32">
        <GalleryHeading>
          a growing collection of the places i&apos;ve been
        </GalleryHeading>
        <div className="mt-14">
          <PhotoGrid items={photos} />
        </div>
      </section>
    </div>
  );
}
