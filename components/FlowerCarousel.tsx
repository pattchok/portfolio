import PeekCarousel from "@/components/PeekCarousel";

const photos = [
  "/flower1.png",
  "/flower2.png",
  "/flower3.jpeg",
];

export default function FlowerCarousel() {
  return <PeekCarousel photos={photos} alt="flower arrangement" />;
}
