import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";

type SectionProps = {
  children: ReactNode;
  id?: string;
  muted?: boolean;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  muted = false,
  className = "",
  containerClassName = "",
}: SectionProps) {
  const sectionClassName = `section ${muted ? "section-muted" : ""} ${className}`.trim();

  return (
    <section id={id} className={sectionClassName}>
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}
