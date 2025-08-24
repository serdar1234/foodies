import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <Image src={logoImg.src} alt="logo" width={100} height={100} />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
