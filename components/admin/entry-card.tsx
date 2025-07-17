import { Check, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Entry } from "@/lib/types";

interface EntryCardProps {
  entry: Entry;
  isPending: boolean;
  onApprove: () => void;
  onDeny: () => void;
  onDelete: () => void;
}

export default function EntryCard({
  entry,
  isPending,
  onApprove,
  onDeny,
  onDelete,
}: EntryCardProps) {
  return (
    <Card>
      <CardContent className='p-4'>
        {isPending ? (
          <>
            {entry.name && (
              <p className='text-accent-foreground mb-1 font-medium'>
                {entry.name}
                {entry.relationship && (
                  <span className='text-muted-foreground font-normal'>
                    {" "}
                    ({entry.relationship})
                  </span>
                )}
              </p>
            )}
            <p className='text-accent-foreground/90 mb-3'>{entry.message}</p>
            <p className='text-muted-foreground/80 mb-3 text-xs'>
              {new Date(entry.created_at).toLocaleDateString()} • IP:{" "}
              {entry.submitted_by_ip}
            </p>
            <div className='flex gap-2'>
              <Button
                size='sm'
                onClick={onApprove}
                className='flex-1 bg-green-600 text-white hover:bg-green-700'
              >
                <Check className='mr-1 size-4' />
                Approve
              </Button>
              <Button
                size='sm'
                variant='outline'
                onClick={onDeny}
                className='flex-1'
              >
                <X className='mr-1 size-4' />
                Deny
              </Button>
              <Button size='sm' variant='destructive' onClick={onDelete}>
                <Trash2 className='size-4' />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className='mb-2 flex items-center justify-between'>
              <Badge
                variant={
                  entry.status === "approved"
                    ? "default"
                    : entry.status === "denied"
                      ? "destructive"
                      : "secondary"
                }
              >
                {entry.status}
              </Badge>
              <Button
                size='sm'
                variant='ghost'
                onClick={onDelete}
                className='p-1 text-red-600 hover:text-red-700'
              >
                <Trash2 className='size-4' />
              </Button>
            </div>
            {entry.name && (
              <p className='text-accent-foreground mb-1 text-sm font-medium'>
                {entry.name}
              </p>
            )}
            <p className='text-accent-foreground/90 mb-2 line-clamp-3 text-sm'>
              {entry.message}
            </p>
            <p className='text-muted-foreground text-xs'>
              {new Date(entry.created_at).toLocaleDateString()}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
