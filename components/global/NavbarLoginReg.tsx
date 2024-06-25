import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const NavbarLoginReg = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between">
      <Link href={"/"}>
        <Image
          src={
            "https://res.cloudinary.com/dyb0qa58h/image/upload/v1696245158/company-4-logo_syxli0.png"
          }
          alt="Cyberize"
          width={40}
          height={40}
        />
      </Link>

      <div className="flex items-center">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavbarLoginReg;
