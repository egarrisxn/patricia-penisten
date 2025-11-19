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
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className={`${className} size-6 md:size-8`}>{icon}</div>
          <div>
            <p className="text-xs text-muted-foreground md:text-sm">{label}</p>
            <p className="text-xl font-bold text-accent-foreground md:text-2xl">
              {count}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
