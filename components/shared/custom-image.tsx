import { PixelImage } from "@/components/ui/photo-pixels";

export default function CustomImage() {
  return (
    <PixelImage src='pixel-image.png' grid='6x4' grayscaleAnimation={true} />
  );
}
