"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-violet-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/dashboard",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/dashboard",
    color: "text-orange-700",
  },
  {
    label: "Musıc Generation",
    icon: Music,
    href: "/dashboard",
    color: "text-emerald-500",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            {" "}
            Genıus
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
