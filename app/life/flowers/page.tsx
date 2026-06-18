import type { Metadata } from "next";
import { BackToLife, GalleryHeading, PhotoGrid } from "@/components/photo-grid";
import { flowerPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Flowers",
};

export default function FlowersGalleryPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      <section className="pt-[2.5rem] pb-24 sm:pt-[3.2rem] sm:pb-32">
        <GalleryHeading>
          flowers
        </GalleryHeading>
        <div className="mt-14">
          <PhotoGrid items={flowerPhotos} />
        </div>
        <BackToLife />
      </section>
    </div>
  );
}
