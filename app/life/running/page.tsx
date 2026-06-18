import type { Metadata } from "next";
import { BackToLife, GalleryHeading, PhotoGrid } from "@/components/photo-grid";
import { runningPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Running",
};

export default function RunningGalleryPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      <section className="pt-[2.5rem] pb-24 sm:pt-[3.2rem] sm:pb-32">
        <GalleryHeading>the things i do to keep me grounded</GalleryHeading>
        <div className="mt-14">
          <PhotoGrid items={runningPhotos} />
        </div>
        <BackToLife />
      </section>
    </div>
  );
}
