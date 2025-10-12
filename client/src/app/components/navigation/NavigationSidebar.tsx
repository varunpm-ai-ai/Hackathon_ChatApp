"use client";

import React, { useState } from "react";
import NavigationAction from "./NavigationAction";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationItem from "./NavigationItem";

const NavigationSidebar = () => {
  const [navigationItems, setNavigationItems] = useState([{ id: "home" }]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    id: string;
    x: number;
    y: number;
  } | null>(null);

  const handleAddItem = () => {
    const newId = `server-${navigationItems.length + 1}`;
    setNavigationItems((prev) => [...prev, { id: newId }]);
  };

  const handleSelect = (id: string) => {
    setActiveId(id);
  };

  const handleRemove = (id: string) => {
    setNavigationItems((prev) => prev.filter((item) => item.id !== id));
    if (activeId === id) setActiveId(null);
    setContextMenu(null);
  };

  const handleContextMenu = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setContextMenu({ id, x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-[#1E1F22] py-3"
      onClick={() => setContextMenu(null)}
    >
      <NavigationAction onAdd={handleAddItem} />
      <Separator className="h-[2px] bg-zinc-700 rounded-md w-10 mx-auto" />

      <ScrollArea className=" flex-1 w-full overflow-y-auto scrollbar-none ">
        {navigationItems.map((item) => (
          <div key={item.id} className=" mb-4 ">
            <NavigationItem
              id={item.id}
              active={activeId === item.id}
              onSelect={() => handleSelect(item.id)}
              onRightClick={(e) => handleContextMenu(e, item.id)}
            />
          </div>
        ))}
      </ScrollArea>

      {contextMenu && (
        <div
          className="absolute z-50 bg-zinc-800 text-white px-3 py-2 rounded-md shadow-md cursor-pointer hover:bg-red-600 text-sm flex truncate"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={() => handleRemove(contextMenu.id)}
        >
          Remove Server
        </div>
      )}
    </div>
  );
};

export default NavigationSidebar;
