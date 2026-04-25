import Image from "next/image";

type ImageProofProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "square";
};

const aspectClasses = {
  portrait: "aspect-[4/5] w-full object-cover rounded-none",
  landscape: "aspect-[16/10] w-full object-cover rounded-none",
  square: "aspect-square w-full object-cover rounded-none",
};

const dimensionMap = {
  portrait: { width: 800, height: 1000 },
  landscape: { width: 1400, height: 875 },
  square: { width: 1200, height: 1200 },
};

export function ImageProof({
  src,
  alt,
  caption,
  priority = false,
  aspect = "portrait",
}: ImageProofProps) {
  const dims = dimensionMap[aspect];

  return (
    <figure className="relative border border-text bg-secondary p-2">
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        priority={priority}
        className={aspectClasses[aspect]}
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
      <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
