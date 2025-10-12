"use client"

import React, { createContext, useContext, useState } from "react";

type ServerContextType = {
  selectedServer: string | null;
  setSelectedServer: (id: string | null) => void;
};

const ServerContext = createContext<ServerContextType | undefined>(undefined);

export const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedServer, setSelectedServer] = useState<string | null>(null);

  return (
    <ServerContext.Provider value={{ selectedServer, setSelectedServer }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServer = () => {
  const ctx = useContext(ServerContext);
  if (!ctx) throw new Error("useServer must be used within ServerProvider");
  return ctx;
};

export default ServerProvider;
