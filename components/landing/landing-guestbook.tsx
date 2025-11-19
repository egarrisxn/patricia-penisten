"use client";

import { useUserContent } from "@/hooks/use-user-content";
import GuestbookList from "@/components/landing/guestbook-list";
import GuestbookForm from "@/components/landing/guestbook-form";

import type { GuestbookEntry } from "@/lib/types";

export default function LandingGuestbook() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<GuestbookEntry>("entries");

  const handleEntrySubmitted = (entry: GuestbookEntry) => {
    setUserItems((prev) => [entry, ...prev]);
  };

  return (
    <div className="mx-auto grid w-full items-center justify-center gap-12 px-2 pt-8 pb-2 lg:gap-24">
      <GuestbookList userEntries={userItems} approvedEntries={approvedItems} />
      <div className="mx-auto w-full max-w-sm xs:max-w-md md:max-w-xl lg:max-w-2xl 3xl:max-w-3xl">
        <GuestbookForm onEntrySubmitted={handleEntrySubmitted} />
      </div>
    </div>
  );
}
