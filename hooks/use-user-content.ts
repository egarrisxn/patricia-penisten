import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function useUserContent<T extends { id: string }>(
  table: string
): {
  userIP: string;
  userItems: T[];
  approvedItems: T[];
  setUserItems: React.Dispatch<React.SetStateAction<T[]>>;
} {
  const [userIP, setUserIP] = useState<string>("");
  const [userItems, setUserItems] = useState<T[]>([]);
  const [approvedItems, setApprovedItems] = useState<T[]>([]);
  const supabase = createClient();

  // ✅ Initial fetch: IP + approved items
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        // fetch user IP
        const response = await fetch("/api/get-ip");
        const { ip } = await response.json();
        if (!cancelled) {
          setUserIP(ip);
        }
      } catch (error) {
        console.error("Error fetching IP:", error);
      }

      // fetch approved items
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (!cancelled && !error && data) {
        setApprovedItems(data);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [supabase, table]);

  // ✅ Fetch user-submitted items once IP is known
  useEffect(() => {
    if (!userIP) return;
    let cancelled = false;

    const run = async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq("submitted_by_ip", userIP)
        .order("created_at", { ascending: false });

      if (!cancelled && !error && data) {
        setUserItems(data);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [supabase, table, userIP]);

  return {
    userIP,
    userItems,
    approvedItems,
    setUserItems,
  };
}
