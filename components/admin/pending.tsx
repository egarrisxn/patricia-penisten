import { Users } from "lucide-react";
import PhotoCard from "@/components/admin/photo-card";
import EntryCard from "@/components/admin/entry-card";

import type { PhotoEntry, GuestbookEntry } from "@/lib/types";

interface PendingSectionProps {
  pendingPhotos: PhotoEntry[];
  pendingEntries: GuestbookEntry[];
  onPhotoAction: (id: string, action: "approve" | "deny" | "delete") => void;
  onEntryAction: (id: string, action: "approve" | "deny" | "delete") => void;
}

export default function PendingSection({
  pendingPhotos,
  pendingEntries,
  onPhotoAction,
  onEntryAction,
}: PendingSectionProps) {
  const hasPending = pendingPhotos.length > 0 || pendingEntries.length > 0;

  if (!hasPending) {
    return (
      <div className='py-12 text-center'>
        <Users className='mx-auto mb-4 size-16 text-muted-foreground/70' />
        <h3 className='mb-2 text-lg font-semibold text-accent-foreground'>
          No pending submissions
        </h3>
        <p className='text-muted-foreground'>
          All submissions have been reviewed!
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {pendingPhotos.length > 0 && (
        <div>
          <h3 className='mb-4 text-lg font-semibold text-accent-foreground'>
            Pending Photos
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {pendingPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isPending
                onApprove={() => onPhotoAction(photo.id, "approve")}
                onDeny={() => onPhotoAction(photo.id, "deny")}
                onDelete={() => onPhotoAction(photo.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}

      {pendingEntries.length > 0 && (
        <div>
          <h3 className='mb-4 text-lg font-semibold text-accent-foreground'>
            Pending Entries
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {pendingEntries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                isPending
                onApprove={() => onEntryAction(entry.id, "approve")}
                onDeny={() => onEntryAction(entry.id, "deny")}
                onDelete={() => onEntryAction(entry.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
