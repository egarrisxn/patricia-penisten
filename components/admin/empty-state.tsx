import { Users } from "lucide-react";

export default function EmptyState() {
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
