"use client";

import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { GuestbookEntry } from "@/lib/types";

interface EntryListProps {
  approvedEntries: GuestbookEntry[];
  userEntries: GuestbookEntry[];
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

  if (allEntries.length === 0) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
          <MessageCircle className='size-6 md:size-12' />
        </div>
        <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
          No Guestbook entries
        </div>
        <div className='text-muted-foreground/90 text-sm tracking-tight'>
          Be the first to add to our guestbook
        </div>
      </div>
    );
  }

  const isPending = (status: string) => status === "pending";

  return (
    <div className='columns-1 gap-6 space-y-6 sm:columns-2 2xl:columns-3'>
      {allEntries.map((entry) => (
        <div key={`entry-${entry.id}`} className='break-inside-avoid'>
          <Card className='bg-card w-full border-none shadow-xl backdrop-blur-xs'>
            <CardContent className='flex flex-col px-6 pt-4 pb-4'>
              <div className='flex items-start space-x-4'>
                <div className='min-w-0 flex-1 flex-col'>
                  <div className='mb-1 flex items-start justify-between'>
                    {isPending(entry.status) && (
                      <div className='absolute top-3 left-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
                        <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
                        <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
                          Pending
                        </div>
                      </div>
                    )}
                    <time className='text-muted-foreground absolute top-3 right-3 text-xs font-medium md:text-[0.825rem] 2xl:text-sm'>
                      {new Date(entry.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <div>
                      <h4 className='mb-0.5 text-base font-medium tracking-tight md:text-lg 2xl:text-[1.2rem] 2xl:leading-[1.4]'>
                        {entry.name || "Anonymous"}
                      </h4>
                      <p className='text-primary text-xs md:text-sm 2xl:text-base'>
                        {entry.relationship || "Unknown"}
                      </p>
                    </div>
                  </div>
                  <p className='grow pt-4 font-serif text-sm italic md:text-base 2xl:text-lg 2xl:leading-snug 2xl:tracking-tight'>
                    <q>{entry.message}</q>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>

    // <div className='mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-4'>
    //   {allEntries.map((entry) => (
    //     <Card
    //       key={`entry-${entry.id}`}
    //       className='bg-card h-fit w-full border-none shadow-xl backdrop-blur-xs lg:max-w-md 2xl:max-w-lg'
    //     >
    //       <CardContent className='flex h-full flex-col px-6 pt-4 pb-4'>
    //         <div className='flex items-start space-x-4'>
    //           <div className='min-w-0 flex-1 flex-col'>
    //             <div className='mb-1 flex items-start justify-between'>
    //               {isPending(entry.status) && (
    //                 <div className='absolute top-3 left-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
    //                   <div className='bg-primary mb-[1px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
    //                   <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
    //                     Pending
    //                   </div>
    //                 </div>
    //               )}
    //               <time className='text-muted-foreground absolute top-3 right-3 text-xs font-medium md:text-[0.825rem] 2xl:text-sm'>
    //                 {new Date(entry.created_at).toLocaleDateString("en-US", {
    //                   year: "numeric",
    //                   month: "long",
    //                   day: "numeric",
    //                 })}
    //               </time>
    //               <div>
    //                 <h4 className='mb-0.5 text-base font-medium tracking-tight md:text-lg 2xl:text-[1.2rem] 2xl:leading-[1.4]'>
    //                   {entry.name || "Anonymous"}
    //                 </h4>
    //                 <p className='text-primary text-xs md:text-sm 2xl:text-base'>
    //                   {entry.relationship || "Unknown"}
    //                 </p>
    //               </div>
    //             </div>
    //             <p className='grow pt-4 font-serif text-sm italic md:text-base 2xl:text-lg 2xl:leading-snug 2xl:tracking-tight'>
    //               <q>{entry.message}</q>
    //             </p>
    //           </div>
    //         </div>
    //       </CardContent>
    //     </Card>
    //   ))}
    // </div>
  );
}
