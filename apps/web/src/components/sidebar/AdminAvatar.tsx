'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export const AdminAvatar = ({ show }: { show?: boolean }) => {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  return (
    <div
      className={cn(
        'flex items-center gap-2 w-full  transition-colors duration-200 rounded-lg'
      )}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>N</AvatarFallback>
      </Avatar>
      {(!collapsed || show) && (
        <div>
          <p className="text-sm truncate font-medium">PB Car Service Admin</p>
          {/* <p className="text-xs truncate text-muted-foreground">
            neto_admin
          </p> */}
        </div>
      )}
    </div>
  );
};
