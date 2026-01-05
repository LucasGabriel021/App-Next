import Link from "next/link";

export default function AdmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
        <nav>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/adm'>Adm</Link>
            </ul>
        </nav>
        <section>{children}</section>
    </header>
  );
}

