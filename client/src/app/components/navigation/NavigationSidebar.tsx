"use client";

import React from "react";
import NavigationAction from "./NavigationAction";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationItem from "./NavigationItem";

const NavigationSidebar = () => {
  // Example items array, replace with your actual data source
  const navigationItems = [{ id: "home" }];

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-700 rounded-md w-10 mx-auto" />

      <ScrollArea className="flex-1 w-full">
        {navigationItems.map((item) => (
          <div key={item.id} className=" mb-4 ">
            <NavigationItem id={item.id} />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default NavigationSidebar;
