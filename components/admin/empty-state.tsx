import { Users } from "lucide-react";

export default function EmptyState() {
  return (
    <div className='py-12 text-center'>
      <Users className='text-muted-foreground/70 mx-auto mb-4 size-16' />
      <h3 className='text-accent-foreground mb-2 text-lg font-semibold'>
        No pending submissions
      </h3>
      <p className='text-muted-foreground/90'>
        All submissions have been reviewed!
      </p>
    </div>
  );
}
