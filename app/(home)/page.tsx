import { HomeSlider } from "@/app/(home)/components/HomeSlider";
import { BookText } from "lucide-react";
import MainIcon from "@/app/(home)/components/MainIcon";
import MyStatus from "@/app/(home)/components/MyStatus";
import { FirstVVIPJobAnnounce } from "@/app/(home)/components/FirstVVIPJobAnnounce";
import React from "react";
import Analyze from "@/app/(home)/components/Analyze";

export default function Home() {
  return (
    <div className="flex flex-col justify-cente bg-slate-50">
      <HomeSlider />
      <MainIcon />
      <MyStatus />
      <FirstVVIPJobAnnounce />
      <Analyze />
    </div>
  );
}
