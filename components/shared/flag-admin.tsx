"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Trash } from "lucide-react";

interface FlagAdmin {
  itemId: string;
  table: "photos" | "entries";
  initiallyFlagged?: boolean;
}

export default function FlagAdmin({
  itemId,
  table,
  initiallyFlagged = false,
}: FlagAdmin) {
  const [isFlagged, setIsFlagged] = useState(initiallyFlagged);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleFlag = async () => {
    if (isFlagged) return;
    setIsLoading(true);

    const { error } = await supabase
      .from(table)
      .update({ flagged: true })
      .eq("id", itemId);

    if (error) {
      console.error("Error flagging item:", error);
      alert("Something went wrong. Please try again.");
    } else {
      setIsFlagged(true);
      alert("This item has been flagged for admin removal.");
    }

    setIsLoading(false);
  };

  return (
    <button
      onClick={handleFlag}
      disabled={isFlagged || isLoading}
      className={`text-xs font-semibold text-foreground/90 ${
        isFlagged
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:text-black dark:hover:text-white"
      }`}
      title={isFlagged ? "Already flagged" : "Flag this item for admin removal"}
    >
      {isFlagged ? "Request Sent" : <Trash size={14} />}
    </button>
  );
}
