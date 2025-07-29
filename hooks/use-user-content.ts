import { useState, useEffect, useCallback } from "react";
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

  const fetchUserIP = async () => {
    try {
      const response = await fetch("/api/get-ip");
      const { ip } = await response.json();
      setUserIP(ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  const fetchApproved = useCallback(async () => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    if (!error && data) setApprovedItems(data);
  }, [supabase, table]);

  const fetchUserSubmitted = useCallback(async () => {
    if (!userIP) return;
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("submitted_by_ip", userIP)
      .order("created_at", { ascending: false });
    if (!error && data) setUserItems(data);
  }, [supabase, table, userIP]);

  useEffect(() => {
    fetchUserIP();
    fetchApproved();
  }, [fetchApproved]);

  useEffect(() => {
    if (userIP) fetchUserSubmitted();
  }, [userIP, fetchUserSubmitted]);

  return {
    userIP,
    userItems,
    approvedItems,
    setUserItems,
  };
}
