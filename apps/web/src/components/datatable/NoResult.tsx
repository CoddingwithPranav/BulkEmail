import { Text } from "@/components/common";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleAlert, Plus, Search } from "lucide-react";
import Link from "next/link";

export type NoResultsProps = {
  title?: string;
  message?: string;
  className?: string;
};

export const NoResults: React.FC<NoResultsProps> = ({
  className,
  title,
  message,
}) => {
  return (
    <div
      className={cn(
        "flex h-[200px] w-full items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center gap-y-2">
        <Search />
        <Text size="small" leading="compact" weight="plus">
          {title ?? "No results"}
        </Text>
        <Text size="small" className="text-muted-foreground">
          {message ?? "Try changing the filters or search query"}
        </Text>
      </div>
    </div>
  );
};

type ActionProps = {
  action?: {
    href: string;
    label: string;
  };
};

type NoRecordsProps = {
  title?: string;
  message?: string;
  className?: string;
  buttonVariant?: string;
  icon?: React.ReactNode;
} & ActionProps;

const DefaultButton = ({ action }: ActionProps) =>
  action && (
    <Link href={action.href}>
      <Button variant="secondary" size="sm">
        {action.label}
      </Button>
    </Link>
  );

const TransparentIconLeftButton = ({ action }: ActionProps) =>
  action && (
    <Link href={action.href}>
      <Button variant="ghost">
        <Plus /> {action.label}
      </Button>
    </Link>
  );

export const NoRecords = ({
  title,
  message,
  action,
  className,
  buttonVariant = "default",
  icon = <CircleAlert className="text-primary" />,
}: NoRecordsProps) => {
  return (
    <div
      className={cn(
        "flex h-[150px] w-full flex-col items-center justify-center gap-y-4",
        className
      )}
    >
      <div className="flex flex-col items-center gap-y-3">
        {icon}

        <div className="flex flex-col items-center gap-y-1">
          <Text size="small" leading="compact" weight="plus">
            {title ?? "No records"}
          </Text>

          <Text size="small" className="text-muted-foreground">
            {message ?? "There are no records to show"}
          </Text>
        </div>
      </div>

      {buttonVariant === "default" && <DefaultButton action={action} />}
      {buttonVariant === "transparentIconLeft" && (
        <TransparentIconLeftButton action={action} />
      )}
    </div>
  );
};
