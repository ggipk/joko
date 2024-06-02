"use client";
import { AlignJustify, Bell, Search, User } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = null;
  const router = useRouter();

  const alarmPageHandler = () => {
    if (user) {
      console.log("아직 로그인 프로세스를 안만들었다.");
    } else {
      router.push("/login");
    }
  };
  return (
    <nav className="flex flex-col justify-center items-center m-4">
      <div className="flex flex-row w-full justify-between items-center ">
        <Link href="/">
          <div className="text-blue-700 font-bold text-4xl">JobKo</div>
        </Link>
        <div className="flex justify-en items-center gap-x-4 lg:hidden">
          <Bell onClick={alarmPageHandler} />
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
