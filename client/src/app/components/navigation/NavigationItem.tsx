"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import coder from "../../../../public/Coder.png";

interface NavigationItemProps {
  id: string;
  active: boolean;
  onSelect: () => void;
  onRightClick: (e: React.MouseEvent) => void;
}

const NavigationItem = ({
  id,
  active,
  onSelect,
  onRightClick,
}: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <button
      onClick={onSelect}
      onContextMenu={onRightClick}
      className=" group relative flex items-center "
    >
      {active && (
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            active ? "h-[36px]" : "h-[8px]"
          )}
        />
      )}

      <div
        className={cn(
          "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden ",
          params?.serverId == id && "bg-primary/10 text-primary rounded-[16px]"
        )}
      >
        <Image fill src={coder} alt="channel" />
      </div>
    </button>
  );
};

export default NavigationItem;
