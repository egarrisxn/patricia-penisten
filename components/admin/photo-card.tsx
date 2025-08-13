import Image from "next/image";
import { Check, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { PhotoEntry } from "@/lib/types";

interface PhotoEntryCardProps {
  photo: PhotoEntry;
  isPending: boolean;
  onApprove: () => void;
  onDeny: () => void;
  onDelete: () => void;
}

export default function PhotoCard({
  photo,
  isPending,
  onApprove,
  onDeny,
  onDelete,
}: PhotoEntryCardProps) {
  return (
    <Card className='overflow-hidden'>
      <div className='relative aspect-square'>
        <Image
          src={photo.image_url}
          alt={photo.caption || "Photo"}
          fill
          className='size-full object-cover'
          sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
      </div>
      <CardContent className='p-3'>
        {photo.name && (
          <p className='text-accent-foreground mb-1 font-medium'>
            By {photo.name}
          </p>
        )}
        {photo.caption && (
          <p className='text-accent-foreground/90 mb-3 text-sm'>
            {photo.caption}
          </p>
        )}
        <p className='text-muted-foreground mb-3 text-xs'>
          {new Date(photo.created_at).toLocaleDateString()} • IP:{" "}
          {photo.submitted_by_ip}
        </p>

        {isPending ? (
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
        ) : (
          <div className='flex items-center justify-between'>
            <Badge
              variant={
                photo.status === "approved"
                  ? "default"
                  : photo.status === "denied"
                    ? "destructive"
                    : "secondary"
              }
            >
              {photo.status}
            </Badge>
            <Button
              size='sm'
              variant='ghost'
              onClick={onDelete}
              className='p-1 text-red-600 hover:bg-transparent hover:text-red-700'
            >
              <Trash2 className='size-4' />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
