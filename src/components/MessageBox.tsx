"use client";
import { Button } from "./ui/button";
import { CircleStopIcon, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChatInputProps {
  onSend: ({ userInput, model }: { userInput: string; model: string }) => void;
  disabled: boolean;
}

export default function MessageBox({ onSend, disabled }: ChatInputProps) {
  const [model, setModel] = useState("gemini-2.0-flash");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    onSend({ userInput: message, model });
    setMessage("");
  };

  return (
    <div className="w-1/2 h-27 bottom-4 fixed flex flex-col gap-1 px-1 py-10 justify-center bg-card  border border-primary/30 rounded-xl">
      <Textarea
        placeholder="Pour your heart out to Serene.AI"
        className="w-full border-none text-foreground  resize-none "
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        value={message}
      />
      <div className="w-full px-2 flex justify-between items-center bottom-4">
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-fit text-[12px] bg-primary/20 mb-4 border border-primary/30 rounded-lg text-muted-foreground">
            <SelectValue placeholder={model} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="gemini-2.0-flash">gemini-2.0-flash</SelectItem>
              <SelectItem value="llama-3.3-70b-versatile">
                llama-3.3-70b-versatile
              </SelectItem>
              <SelectItem value="llama-3.1-8b-instant">
                llama-3.1-8b-instant
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          disabled={disabled}
          className={`mt-6 m-0.5  mb-4 bg-transparent hover:bg-primary/20 cursor-pointer text-foreground ${
            disabled ? "animate-pulse duration-300" : ""
          }`}
          onClick={handleSend}
        >
          {disabled ? <CircleStopIcon /> : <Send />}
        </Button>
      </div>
    </div>
  );
}
