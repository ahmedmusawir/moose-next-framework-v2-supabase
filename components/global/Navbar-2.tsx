import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "./ThemeToggler";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/auth/user");
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/auth");
    } else {
      const result = await response.json();
      console.error("Logout error:", result.error);
    }
  };

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

        {user && <span className="mr-3">{user.email}</span>}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://res.cloudinary.com/dyb0qa58h/image/upload/v1699413824/wjykytitrfuv2ubnyzqd.png"
                alt={user ? user.email : "Avatar"}
              />
              <AvatarFallback>{user ? user.email[0] : "U"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
