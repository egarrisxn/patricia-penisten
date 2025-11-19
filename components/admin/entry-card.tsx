import { Check, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { GuestbookEntry } from "@/lib/types";

interface GuestbookEntryCardProps {
  entry: GuestbookEntry;
  isPending?: boolean;
  flagged?: boolean;
  onApprove?: () => void;
  onDeny?: () => void;
  onDelete: () => void;
}

export default function EntryCard({
  entry,
  isPending = false,
  flagged = false,
  onApprove,
  onDeny,
  onDelete,
}: GuestbookEntryCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        {flagged ? (
          <Button size="sm" variant="destructive" onClick={onDelete}>
            <Trash2 className="size-4" /> Delete
          </Button>
        ) : isPending ? (
          <>
            {entry.name && (
              <p className="mb-1 font-medium text-accent-foreground">
                {entry.name}{" "}
                {entry.relationship && (
                  <span className="font-normal text-muted-foreground">
                    ({entry.relationship})
                  </span>
                )}
              </p>
            )}
            <p className="mb-3 text-accent-foreground">{entry.message}</p>
            <p className="mb-3 text-xs text-muted-foreground">
              {new Date(entry.created_at).toLocaleDateString()} • IP:{" "}
              {entry.submitted_by_ip}
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={onApprove}
                className="flex-1 bg-green-600 text-white hover:bg-green-700"
              >
                <Check className="mr-1 size-4" /> Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={onDeny}
                className="flex-1"
              >
                <X className="mr-1 size-4" /> Deny
              </Button>
              <Button size="sm" variant="destructive" onClick={onDelete}>
                <Trash2 className="size-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-2 flex items-center justify-between">
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
                size="sm"
                variant="ghost"
                onClick={onDelete}
                className="p-1 text-red-600 hover:text-red-700"
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
            {entry.name && (
              <p className="mb-1 text-sm font-medium text-foreground">
                {entry.name}
              </p>
            )}
            <p className="mb-2 line-clamp-3 text-sm text-accent-foreground">
              {entry.message}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(entry.created_at).toLocaleDateString()}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
