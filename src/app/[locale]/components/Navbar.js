"use client";
import { Link, usePathname } from "@/src/navigation";

const Navbar = () => {
  const routes = usePathname();
  return (
    <div>
      <div>
        {/* link section */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href={routes} locale="en">
          English
        </Link>
        <Link href={routes} locale="bn">
          Bangla
        </Link>
        <Link href={routes} locale="ar">
          Arabic
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
