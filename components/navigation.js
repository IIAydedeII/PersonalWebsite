import Link from "next/Link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkında</a>
      </Link>
    </nav>
  );
}
