import Link from "next/Link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkında</a>
      </Link>
      <Link href="/form">
        <a>Form</a>
      </Link>
    </nav>
  );
};

export default Navigation;
