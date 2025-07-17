import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  className?: string;
}

export default function StatCard({
  icon,
  label,
  count,
  className,
}: StatsCardProps) {
  return (
    <Card>
      <CardContent className='p-6'>
        <div className='flex items-center gap-3'>
          <div className={`${className} size-8`}>{icon}</div>
          <div>
            <p className='text-muted-foreground/90 text-sm'>{label}</p>
            <p className='text-accent-foreground text-2xl font-bold'>{count}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
