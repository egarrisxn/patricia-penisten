"use client";

import GuestbookList from "@/components/landing/guestbook-list";
import GuestbookForm from "@/components/landing/guestbook-form";
import { useUserContent } from "@/hooks/use-user-content";

import type { GuestbookEntry } from "@/lib/types";

export default function LandingGuestbook() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<GuestbookEntry>("entries");

  const handleEntrySubmitted = (entry: GuestbookEntry) => {
    setUserItems((prev) => [entry, ...prev]);
  };

  return (
    <div className='xs:px-4 mx-auto grid w-full items-center justify-center gap-12 px-2 pt-8'>
      <GuestbookList userEntries={userItems} approvedEntries={approvedItems} />
      <div className='mx-auto mt-6 w-full'>
        <GuestbookForm onEntrySubmitted={handleEntrySubmitted} />
      </div>
    </div>
  );
}
