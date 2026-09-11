import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ApMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/ap-mark.webp"
      alt=""
      width={512}
      height={327}
      className={cn("h-8 w-auto", className)}
    />
  );
}

export function BrandMark({
  className,
  href = "/",
  invert = false,
}: {
  className?: string;
  href?: string;
  invert?: boolean;
}) {
  const mark = (
    <Image
      src="/brand/ap-lockup.webp"
      alt="AP Creative Co"
      width={800}
      height={519}
      priority
      className={cn("h-11 w-auto sm:h-12", invert && "invert", className)}
    />
  );

  if (!href) return mark;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="AP Creative Co">
      {mark}
    </Link>
  );
}

export function FlowXLogo({
  href = "/",
  className,
}: {
  height?: number;
  href?: string;
  className?: string;
}) {
  return <BrandMark href={href} className={className} />;
}

export function FlowXWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <BrandMark href="" className="h-10 sm:h-11" />
    </span>
  );
}
