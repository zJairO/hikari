import Link from "next/link";
import Image from "next/image";
import hikariLogo from "@/public/images/hikari_logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Hikari">
      <Image 
        src={hikariLogo} 
        alt="Hikari Logo" 
        width={150} 
        height={50} 
        priority 
      />
    </Link>
  );
}
