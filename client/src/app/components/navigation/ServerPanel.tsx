"use client";

import React, { useState } from "react";
import { useServer } from "../ServerProvider";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ServerPanel = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const { selectedServer } = useServer();

  if (!selectedServer) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="text-sm text-muted-foreground">
          Select a server to view its panel.
        </p>
      </div>
    );
  }

  const fetchMessages = async () => {
    const res = await fetch("http://localhost:4001/messages");
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    await fetch("http://localhost:4001/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "Varun", text: input }),
    });
    setInput("");
    fetchMessages();
  };

  return (
    <div className="h-screen flex">
      <aside className="w-72 bg-gray-900 p-4 text-white">
        <div className="mb-4 bg-gray-800 hover:bg-gray-800/60 px-2 py-1 rounded-md ">
          <h3 className="text-lg font-bold">{selectedServer}</h3>
          <p className="text-xs text-zinc-400">Server description </p>
        </div>
        <div>
          <Separator className="h-[2px] bg-zinc-700 rounded-md w-full mx-auto" />
          <h4 className="text-sm font-semibold mb-2 mt-6 bg-gray-800 hover:bg-gray-800/60 p-2 rounded-md ">
            Students
          </h4>
          <ul className="space-y-4 text-sm">
            <li>Student 1</li>
            <li>Student 2</li>
            <li>Student 3</li>
          </ul>
        </div>
      </aside>

      <section className="flex-1 p-6">
        <div className="bg-[#0f1112] rounded-md p-4 h-full text-white flex flex-col">
          <h3 className="text-lg font-semibold mb-2">
            #{selectedServer}-general
          </h3>
          <div className="space-y-3 mt-4 flex-1 overflow-y-auto scrollbar-none ">
            <div className="text-sm text-zinc-300">
              Demo message in the channel.
            </div>
            {messages.map((msg, i) => (
              <div key={i} className="text-sm text-zinc-300">
                <b>{msg.user}:</b> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Input
              value={input}
              className="h-10 flex-1"
              placeholder="Message"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              onClick={sendMessage}
              variant="outline"
              className="h-10 flex-shrink-0"
            >
              Send
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerPanel;
