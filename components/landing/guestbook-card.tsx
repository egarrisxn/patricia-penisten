"use client";

import { Card, CardContent } from "@/components/ui/card";

import type { GuestbookEntry } from "@/lib/types";

interface GuestbookCardProps {
  entry: GuestbookEntry;
  onClick: () => void;
}

export default function GuestbookCard({ entry, onClick }: GuestbookCardProps) {
  const isPending = entry.status === "pending";

  return (
    <Card
      onClick={onClick}
      className="w-full max-w-sm cursor-pointer border-none bg-card py-4 transition-shadow hover:shadow-lg xs:max-w-md md:max-w-xl xl:max-w-lg 2xl:max-w-md dark:border"
    >
      <CardContent className="relative flex flex-col px-6 py-4">
        <time className="absolute top-0 right-4 text-xs font-medium text-muted-foreground md:text-[0.825rem] 2xl:text-sm">
          {new Date(entry.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h5 className="pt-2 pb-1.5 text-lg leading-none font-medium 3xl:text-xl">
          {entry.name || "Anonymous"}
        </h5>
        <p className="text-xs leading-none text-primary 3xl:text-sm">
          {entry.relationship || "Unknown"}
        </p>

        <p className="grow pt-3.5 pb-1 font-serif text-base wrap-break-word text-black italic 3xl:text-lg dark:text-white">
          <q>{entry.message}</q>
        </p>

        {isPending && (
          <div className="absolute right-4 bottom-0 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]">
            <div className="mb-[1.5px] size-2 animate-pulse rounded-full bg-primary md:size-[8.5px] 2xl:size-2.5"></div>
            <div className="text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm">
              Pending
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
