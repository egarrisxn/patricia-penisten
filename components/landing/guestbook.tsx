"use client";

import EntryList from "@/components/landing/entry-list";
import EntryForm from "@/components/landing/entry-form";
import { useUserContent } from "@/hooks/use-user-content";
import type { GuestbookEntry } from "@/lib/types";

export default function Guestbook() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<GuestbookEntry>("entries");

  const handleEntrySubmitted = (entry: GuestbookEntry) => {
    setUserItems((prev) => [entry, ...prev]);
  };

  return (
    <div className='grid grid-cols-1 gap-12 px-4 py-8'>
      <EntryList userEntries={userItems} approvedEntries={approvedItems} />
      <div className='mx-auto mt-8 w-full max-w-xl'>
        <EntryForm onEntrySubmitted={handleEntrySubmitted} />
      </div>
    </div>
  );
}
