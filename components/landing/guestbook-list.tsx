"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import GuestbookCard from "@/components/landing/guestbook-card";
import FlagAdmin from "@/components/shared/flag-admin";

import type { GuestbookEntry } from "@/lib/types";

interface GuestbookListProps {
  userEntries: GuestbookEntry[];
  approvedEntries: GuestbookEntry[];
}

export default function GuestbookList({
  userEntries,
  approvedEntries,
}: GuestbookListProps) {
  const allEntries = [
    ...userEntries.filter((entry) => entry.status !== "denied"),
    ...approvedEntries.filter(
      (entry) =>
        entry.status === "approved" &&
        !userEntries.some((userEntry) => userEntry.id === entry.id)
    ),
  ];

  const [selectedEntry, setSelectedEntry] = useState<GuestbookEntry | null>(
    null
  );

  const openDialog = (entry: GuestbookEntry) => setSelectedEntry(entry);
  const closeDialog = () => setSelectedEntry(null);

  if (allEntries.length === 0) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex items-center justify-center'>
          <MessageCircle className='size-6 md:size-12' />
        </div>
        <div className='mb-2 text-base font-semibold text-foreground/90 md:text-lg'>
          No Guestbook entries
        </div>
        <div className='text-sm tracking-tight text-muted-foreground/90 md:text-base'>
          Be the first to add to our guestbook
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='w-full columns-1 gap-6 space-y-6 xl:columns-2 xl:gap-8 xl:space-y-8 2xl:columns-3'>
        {allEntries.map((entry) => (
          <div key={`entry-${entry.id}`} className='break-inside-avoid'>
            <GuestbookCard entry={entry} onClick={() => openDialog(entry)} />
          </div>
        ))}
      </div>

      {selectedEntry && (
        <Dialog open={selectedEntry !== null} onOpenChange={closeDialog}>
          <DialogContent className='max-w-2xl bg-card p-0'>
            <div className='relative flex flex-col py-4 pr-5 pl-6'>
              <time className='text-xs text-muted-foreground'>
                {new Date(selectedEntry.created_at).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
              <DialogHeader className='gap-0 pt-2 pr-1 pb-2.5 text-start'>
                <DialogTitle className='pb-1.5 text-lg leading-none font-medium'>
                  {selectedEntry.name || "Anonymous"}
                </DialogTitle>
                {selectedEntry.relationship && (
                  <p className='text-xs leading-none text-primary'>
                    {selectedEntry.relationship}
                  </p>
                )}
              </DialogHeader>

              <p className='pr-1 pb-2 font-serif text-base text-black italic dark:text-white'>
                <q>{selectedEntry.message}</q>
              </p>

              {selectedEntry.status === "pending" && (
                <div className='flex flex-row items-center justify-end gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
                  <div className='mb-[1.5px] size-2 animate-pulse rounded-full bg-primary md:size-[8.5px] 2xl:size-2.5'></div>
                  <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
                    Pending
                  </div>
                </div>
              )}
              {selectedEntry.status === "approved" && (
                <div className='flex justify-end'>
                  <FlagAdmin
                    itemId={selectedEntry.id}
                    table='entries'
                    initiallyFlagged={selectedEntry.flagged}
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
