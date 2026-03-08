import Link from "next/link";

type CTAGroupProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CTAGroup({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTAGroupProps) {
  return (
    <div className="button-row">
      <Link href={primaryHref} className="btn btn-primary">
        {primaryLabel}
      </Link>
      <Link href={secondaryHref} className="btn btn-secondary">
        {secondaryLabel}
      </Link>
    </div>
  );
}
