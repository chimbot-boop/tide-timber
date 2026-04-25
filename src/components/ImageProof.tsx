import Image from "next/image";

type ImageProofProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "square";
};

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

export function ImageProof({ src, alt, caption, priority = false, aspect = "landscape" }: ImageProofProps) {
  const sizes = aspect === "portrait" ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw";

  return (
    <figure className="relative border border-text bg-secondary p-2">
      <div className={`relative ${aspectClasses[aspect]} w-full overflow-hidden`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="rounded-none object-cover" />
      </div>
      <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">{caption}</figcaption>
    </figure>
  );
}
