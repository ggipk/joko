"use client";
import { AlignJustify, Bell, Search, User } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center m-4">
      <div className="flex flex-row w-full justify-between items-center ">
        <Link href="/">
          <div className="text-blue-700 font-bold text-4xl">JobKo</div>
        </Link>
        <div className="flex justify-en items-center gap-x-4 lg:hidden">
          <Bell />
          <User />
          <AlignJustify />
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Input className="w-full inline -z-10" type="search" />
        <Search
          className="inline z-10 -m-9"
          onClick={() => console.log("버튼 눌린다.")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
