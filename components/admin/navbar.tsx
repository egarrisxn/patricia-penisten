"use client";

import { useRouter } from "next/navigation";
import { Shield, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function AdminNavbar() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className='border-b shadow-sm'>
      <div className='container mx-auto p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Shield className='size-8 text-blue-600' />
            <h1 className='text-2xl font-bold text-gray-900'>
              Admin Dashboard
            </h1>
          </div>
          <Button
            onClick={handleLogout}
            variant='outline'
            className='flex items-center gap-2'
          >
            <LogOut className='size-4' />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
