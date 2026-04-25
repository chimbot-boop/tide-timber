import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center justify-center border px-5 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const styles = variant === "primary"
    ? "border-accent bg-accent text-bg hover:bg-accent-hover"
    : "border-text bg-transparent text-text hover:bg-text hover:text-bg";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
