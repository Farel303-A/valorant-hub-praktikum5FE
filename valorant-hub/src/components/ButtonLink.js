import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }) {
  return (
    <Link href={href} className={`btn btn--${variant}`}>
      {children}
    </Link>
  );
}
