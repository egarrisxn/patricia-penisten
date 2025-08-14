import { Users } from "lucide-react";
import PhotoCard from "@/components/admin/photo-card";
import EntryCard from "@/components/admin/entry-card";

import type { PhotoEntry, GuestbookEntry } from "@/lib/types";

interface FlaggedSectionProps {
  flaggedPhotos: PhotoEntry[];
  flaggedEntries: GuestbookEntry[];
  onPhotoAction: (id: string, action: "delete") => void;
  onEntryAction: (id: string, action: "delete") => void;
}

export default function FlaggedSection({
  flaggedPhotos,
  flaggedEntries,
  onPhotoAction,
  onEntryAction,
}: FlaggedSectionProps) {
  const hasFlagged = flaggedPhotos.length > 0 || flaggedEntries.length > 0;

  if (!hasFlagged) {
    return (
      <div className='py-12 text-center'>
        <Users className='mx-auto mb-4 size-16 text-muted-foreground/70' />
        <h3 className='mb-2 text-lg font-semibold text-accent-foreground'>
          No flagged submissions
        </h3>
        <p className='text-muted-foreground/90'>
          All submissions have been reviewed!
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {flaggedPhotos.length > 0 && (
        <div>
          <h3 className='mb-4 text-lg font-semibold text-accent-foreground'>
            Flagged Photos
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {flaggedPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isPending={false} // no approve/deny for flagged
                onApprove={() => {}} // optional, no-op
                onDeny={() => {}} // optional, no-op
                onDelete={() => onPhotoAction(photo.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}

      {flaggedEntries.length > 0 && (
        <div>
          <h3 className='mb-4 text-lg font-semibold text-accent-foreground'>
            Flagged Entries
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {flaggedEntries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                isPending={false} // no approve/deny for flagged
                onApprove={() => {}}
                onDeny={() => {}}
                onDelete={() => onEntryAction(entry.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
