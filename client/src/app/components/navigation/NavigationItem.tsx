"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import coder from "../../../../public/Coder.png"

interface NavigationItemProps {
  id: string;
}

const NavigationItem = ({ id }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <button className=" group relative flex items-center ">
      <div
        className={cn(
          "left-0 bg-primary rounded-r-full transition-all w-[4px]",
          params?.serverId !== id && "group-hover:h-[42px]",
          params?.serverId == id ? "h-[36px]" : "h-[40px]"
        )}
      >
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden ",
            params?.serverId == id && "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
            <Image
            fill
            src={coder}
            alt="channel"
            />
        </div>
      </div>
    </button>
  );
};

export default NavigationItem;
