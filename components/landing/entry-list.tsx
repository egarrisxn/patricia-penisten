"use client";

import { User, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Entry } from "@/lib/types";

interface EntryListProps {
  approvedEntries: Entry[];
  userEntries: Entry[];
}

export default function EntryList({
  approvedEntries,
  userEntries,
}: EntryListProps) {
  const allEntries = [
    ...approvedEntries,
    ...userEntries.filter(
      (e) =>
        e.status === "pending" && !approvedEntries.some((ae) => ae.id === e.id)
    ),
  ];

  const isPending = (status: string) => status === "pending";

  if (allEntries.length === 0) {
    return (
      <section className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800'>
          <MessageCircle className='text-foreground/80 size-12' />
        </div>
        <p className='text-foreground/80 text-lg'>No Guestbook entries yet</p>
        <p className='text-foreground/70 text-sm'>
          Be the first to add a lovely story
        </p>
      </section>
    );
  }

  return (
    <>
      <section className='grid grid-cols-1 gap-6'>
        {allEntries.map((entry, index) => (
          <Card
            key={`entry-${entry.id}`}
            className={`p-6 shadow-lg backdrop-blur-sm hover:shadow-xl ${
              index === 0 ? "ring-primary/50 ring-1" : ""
            }`}
          >
            <CardContent className='p-4'>
              <div className='flex items-start space-x-4'>
                <div className='min-w-0 flex-1 flex-col'>
                  <div className='mb-4 flex items-start justify-between'>
                    {isPending(entry.status) && (
                      <div className='absolute top-2 right-2 rounded-full bg-yellow-200 px-2 py-0.5 text-xs text-yellow-800'>
                        <User className='mr-1 inline-block size-3' /> Pending
                        (only you)
                      </div>
                    )}
                    <div>
                      <h4 className='font-medium'>
                        {entry.name ? entry.name : "Anonymous"}
                      </h4>
                      <p className='text-sm text-purple-600 dark:text-purple-300'>
                        - {entry.relationship ? entry.relationship : "Unkown"}
                      </p>
                    </div>
                    <time className='text-accent-foreground/80 text-sm'>
                      {new Date(entry.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <p className='text-foreground/90 italic'>
                    <q>{entry.message}</q>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
