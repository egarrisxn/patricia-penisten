import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import EntryForm from "@/components/landing/entry-form";
import type { GuestbookEntry } from "@/lib/types";

interface EntryListProps {
  approvedEntries: GuestbookEntry[];
  userEntries: GuestbookEntry[];
  onEntrySubmitted: (entry: GuestbookEntry) => void;
}

export default function EntryList({
  approvedEntries,
  userEntries,
  onEntrySubmitted,
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

  return (
    <>
      <div className='columns-1 gap-6 space-y-6 sm:columns-2 2xl:columns-3'>
        {allEntries.map((entry) => (
          <div key={`entry-${entry.id}`} className='break-inside-avoid'>
            <Card className='bg-card/90 w-full border-none shadow-lg'>
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
                        {new Date(entry.created_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <div>
                        <h4 className='mb-1.5 text-base leading-none font-medium md:text-lg 2xl:mb-2 2xl:text-[1.2rem] 2xl:tracking-[-0.0275em]'>
                          {entry.name || "Anonymous"}
                        </h4>
                        <p className='text-primary text-[0.825rem] leading-none md:text-sm 2xl:text-base 2xl:tracking-[-0.0275em]'>
                          {entry.relationship || "Unknown"}
                        </p>
                      </div>
                    </div>
                    <p className='grow pt-4 font-serif text-[0.925rem] leading-[1.45] text-black italic md:text-base md:leading-normal 2xl:text-lg 2xl:tracking-[-0.005em] dark:text-white'>
                      <q>{entry.message}</q>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <EntryForm onEntrySubmitted={onEntrySubmitted} />
      </div>
    </>
  );
}

// import { MessageCircle } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import EntryForm from "@/components/landing/entry-form";
// import type { GuestbookEntry } from "@/lib/types";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// interface EntryListProps {
//   approvedEntries: GuestbookEntry[];
//   userEntries: GuestbookEntry[];
//   onEntrySubmitted: (entry: GuestbookEntry) => void;
// }

// export default function EntryList({
//   approvedEntries,
//   userEntries,
//   onEntrySubmitted,
// }: EntryListProps) {
//   const allEntries = [
//     ...approvedEntries,
//     ...userEntries.filter(
//       (e) =>
//         e.status === "pending" && !approvedEntries.some((ae) => ae.id === e.id)
//     ),
//   ];

//   const isPending = (status: string) => status === "pending";

//   if (allEntries.length === 0) {
//     return (
//       <div className='pt-20 pb-24 text-center'>
//         <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
//           <MessageCircle className='size-6 md:size-12' />
//         </div>
//         <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
//           No Guestbook entries
//         </div>
//         <div className='text-muted-foreground/90 text-sm tracking-tight'>
//           Be the first to add to our guestbook
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Tabs defaultValue='columns'>
//         <TabsList className='mb-2'>
//           <TabsTrigger value='columns'>Columns</TabsTrigger>
//           <TabsTrigger value='list'>List</TabsTrigger>
//         </TabsList>
//         <TabsContent value='columns'>
//           <div className='columns-1 gap-4 space-y-4 sm:columns-2 2xl:columns-3'>
//             {allEntries.map((entry) => (
//               <div key={`entry-${entry.id}`} className='break-inside-avoid'>
//                 <Card className='bg-card/90 w-full border-none shadow-lg'>
//                   <CardContent className='flex flex-col px-6 pt-4 pb-4'>
//                     <div className='flex items-start space-x-4'>
//                       <div className='min-w-0 flex-1 flex-col'>
//                         <div className='mb-1 flex items-start justify-between'>
//                           {isPending(entry.status) && (
//                             <div className='absolute top-3 left-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
//                               <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
//                               <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
//                                 Pending
//                               </div>
//                             </div>
//                           )}
//                           <time className='text-muted-foreground absolute top-3 right-3 text-xs font-medium md:text-[0.825rem] 2xl:text-sm'>
//                             {new Date(entry.created_at).toLocaleDateString(
//                               "en-US",
//                               {
//                                 year: "numeric",
//                                 month: "long",
//                                 day: "numeric",
//                               }
//                             )}
//                           </time>
//                           <div>
//                             <h4 className='mb-1.5 text-base leading-none font-medium md:text-lg 2xl:mb-2 2xl:text-[1.2rem] 2xl:tracking-[-0.0275em]'>
//                               {entry.name || "Anonymous"}
//                             </h4>
//                             <p className='text-primary text-[0.825rem] leading-none md:text-sm 2xl:text-base 2xl:tracking-[-0.0275em]'>
//                               {entry.relationship || "Unknown"}
//                             </p>
//                           </div>
//                         </div>
//                         <p className='grow pt-4 font-serif text-[0.925rem] leading-[1.45] text-black italic md:text-base md:leading-normal 2xl:text-lg 2xl:tracking-[-0.005em] dark:text-white'>
//                           <q>{entry.message}</q>
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//             <EntryForm onEntrySubmitted={onEntrySubmitted} />
//           </div>
//         </TabsContent>
//         <TabsContent value='list'>
//           <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3'>
//             <div className='grid grid-cols-1 space-y-4 2xl:order-2 2xl:col-span-2'>
//               {allEntries.map((entry) => (
//                 <div key={`entry-${entry.id}`} className='x'>
//                   <Card className='w-full gap-0 rounded-none border-none bg-transparent py-0 shadow-none'>
//                     <CardContent className='flex flex-col p-2'>
//                       <div className='flex items-start space-x-4'>
//                         <div className='min-w-0 flex-1 flex-col'>
//                           <div className='mb-1 flex items-start justify-between'>
//                             {isPending(entry.status) && (
//                               <div className='absolute top-3 left-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
//                                 <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
//                                 <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
//                                   Pending
//                                 </div>
//                               </div>
//                             )}
//                             <time className='text-muted-foreground absolute top-3 right-3 text-xs font-medium md:text-[0.825rem] 2xl:text-sm'>
//                               {new Date(entry.created_at).toLocaleDateString(
//                                 "en-US",
//                                 {
//                                   year: "numeric",
//                                   month: "long",
//                                   day: "numeric",
//                                 }
//                               )}
//                             </time>
//                             <div>
//                               <h4 className='mb-1.5 text-base leading-none font-medium md:text-lg 2xl:mb-2 2xl:text-[1.2rem] 2xl:tracking-[-0.0275em]'>
//                                 {entry.name || "Anonymous"}
//                               </h4>
//                               <p className='text-primary text-[0.825rem] leading-none md:text-sm 2xl:text-base 2xl:tracking-[-0.0275em]'>
//                                 {entry.relationship || "Unknown"}
//                               </p>
//                             </div>
//                           </div>
//                           <p className='line-clamp-2 grow pt-4 font-serif text-[0.925rem] leading-[1.45] text-black italic md:text-base md:leading-normal 2xl:text-lg 2xl:tracking-[-0.005em] dark:text-white'>
//                             <q>{entry.message}</q>
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//             <div className='2xl:order-1 2xl:col-span-1'>
//               <EntryForm onEntrySubmitted={onEntrySubmitted} />
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </>
//   );
// }
