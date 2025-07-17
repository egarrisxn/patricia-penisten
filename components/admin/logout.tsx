"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <Button
      onClick={handleLogout}
      variant='outline'
      className='flex items-center gap-2'
    >
      <LogOut className='size-4' />
      Logout
    </Button>
  );
}
