
import Image from "next/image";

export default function GalleryCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="glass group overflow-hidden rounded-3xl border border-white/10">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </div>
  );
}
