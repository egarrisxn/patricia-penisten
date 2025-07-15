"use client";

import { User, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/landing/section-header";
import EntryForm from "@/components/landing/entry-form";
import type { Entry } from "@/lib/types";

interface GuestbookProps {
  approvedEntries: Entry[];
  userEntries: Entry[];
  onEntrySubmitted: (entry: Entry) => void;
}

export default function Guestbook({
  approvedEntries,
  userEntries,
  onEntrySubmitted,
}: GuestbookProps) {
  const allEntries = [
    ...approvedEntries,
    ...userEntries.filter(
      (e) =>
        e.status === "pending" && !approvedEntries.some((ae) => ae.id === e.id)
    ),
  ];

  const isPending = (status: string) => status === "pending";

  return (
    <div
      id='guestbook'
      className='bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-24 pb-40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <SectionHeader
            header='Guestbook'
            subheader='Share your thoughts and stories.'
          />
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
            {allEntries.length > 0 ? (
              <section className='order-2 grid grid-cols-1 gap-6 lg:order-1'>
                {allEntries.map((entry, index) => (
                  <Card
                    key={`entry-${entry.id}`}
                    className={`p-6 shadow-lg backdrop-blur-sm hover:shadow-xl ${
                      index === 0
                        ? "ring-2 ring-purple-200 dark:ring-purple-950"
                        : ""
                    }`}
                  >
                    <CardContent className='p-4'>
                      <div className='flex items-start space-x-4'>
                        {isPending(entry.status) && (
                          <div className='absolute top-2 right-2 rounded-full bg-yellow-200 px-2 py-0.5 text-xs text-yellow-800'>
                            <User className='mr-1 inline-block size-3' />{" "}
                            Pending (only you)
                          </div>
                        )}
                        <div className='min-w-0 flex-1'>
                          <div className='mb-2 flex items-center justify-between'>
                            <div>
                              <h4 className='text-accent-foreground text-lg font-medium'>
                                {entry.name ? entry.name : "Anonymous"}
                              </h4>

                              <p className='text-sm text-purple-600 dark:text-purple-300'>
                                {entry.relationship
                                  ? entry.relationship
                                  : "..."}
                              </p>
                            </div>
                            <time className='text-accent-foreground/90 text-sm'>
                              {new Date(entry.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          </div>
                          <p className='text-muted-foreground leading-relaxed'>
                            {entry.message}
                          </p>
                          {entry.status === "pending" && (
                            <p className='mt-2 text-xs font-medium text-yellow-600'>
                              (Only visible to you until approved)
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </section>
            ) : (
              <section className='py-12 text-center'>
                <div className='bg-accent mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
                  <MessageCircle className='text-muted-foreground/70 size-12' />
                </div>
                <p className='text-muted-foreground/90 text-lg'>
                  No guestbook entries yet
                </p>
                <p className='text-muted-foreground/80 text-sm'>
                  Be the first to share a cherished memory
                </p>
              </section>
            )}

            {/* Entry Form */}
            <section className='order-1 lg:order-2'>
              <EntryForm onEntrySubmitted={onEntrySubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
