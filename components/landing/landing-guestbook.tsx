"use client";

import GuestbookList from "@/components/landing/guestbook-list";
import { useUserContent } from "@/hooks/use-user-content";

import type { GuestbookEntry } from "@/lib/types";

export default function LandingGuestbook() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<GuestbookEntry>("entries");

  const handleEntrySubmitted = (entry: GuestbookEntry) => {
    setUserItems((prev) => [entry, ...prev]);
  };

  return (
    <div className='xs:px-4 mx-auto grid px-2 py-8'>
      <GuestbookList
        userEntries={userItems}
        approvedEntries={approvedItems}
        onEntrySubmitted={handleEntrySubmitted}
      />
    </div>
  );
}
